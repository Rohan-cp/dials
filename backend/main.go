package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/gorilla/mux"
	_ "github.com/lib/pq"
)

type Article struct {
	ID              int        `json:"id"`
	Title           string     `json:"title"`
	Description     string     `json:"description"`
	Author          string     `json:"author"`
	Categories      []Category `json:"categories"`
	SourceLink      string     `json:"sourceLink"`
	Date            time.Time  `json:"date"`
	PreviewImageUrl string     `json:"previewImageUrl"`
}

type Category struct {
	Name  string `json:"name"`
	Color string `json:"color"`
}

type User struct {
	Id    int    `json:"id"`
	Name  string `json:"name"`
	Email string `json:"email"`
}

const (
	host     = "host.docker.internal"
	port     = 5432
	user     = "r"
	password = "teatime"
	dbname   = "postgres"
)

// main function
func main() {
	// connect to database
	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
		"password=%s dbname=%s sslmode=disable\n",
		host, port, user, password, dbname)
	db, err := sql.Open("postgres", psqlInfo)
	if err != nil {
		log.Fatal(err)
	}

	defer db.Close()

	// create table if not exists
	_, err = db.Exec("CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, name TEXT, email TEXT)")
	_, err = db.Exec(`CREATE TABLE IF NOT EXISTS articles (
    	id SERIAL PRIMARY KEY,
    	title TEXT NOT NULL,
    	description TEXT NOT NULL,
    	author TEXT NOT NULL,
    	categories JSONB NOT NULL,
    	source_link TEXT NOT NULL,
    	date TIMESTAMP WITH TIME ZONE NOT NULL,
    	preview_image_url TEXT NOT NULL
	)`)

	if err != nil {
		log.Fatal(err)
	}

	// create router
	router := mux.NewRouter()

	// users routes
	router.HandleFunc("/api/go/users", getUsers(db)).Methods("GET")
	router.HandleFunc("/api/go/users", createUser(db)).Methods("POST")
	router.HandleFunc("/api/go/users/{id}", getUser(db)).Methods("GET")
	router.HandleFunc("/api/go/users/{id}", updateUser(db)).Methods("PUT")
	router.HandleFunc("/api/go/users/{id}", deleteUser(db)).Methods("DELETE")

	// articles routes
	router.HandleFunc("/api/go/articles", getArticles(db)).Methods("GET")
	router.HandleFunc("/api/go/articles", createArticle(db)).Methods("POST")
	router.HandleFunc("/api/go/articles/{id}", updateArticle(db)).Methods("PUT")
	router.HandleFunc("/api/go/articles/{id}", deleteArticle(db)).Methods("DELETE")
	// router.HandleFunc("/api/go/article/carouselPreview", getCarouselPreview(db)).Methods("GET")

	// frames routes
	// router.HandleFunc("/api/go/frames", getFrames(db)).Methods("GET")
	// router.HandleFunc("/api/go/frames/today", getFramesForToday(db)).Methods("GET")

	// wrap the router with CORS and JSON content type middlewares
	enhancedRouter := enableCORS(jsonContentTypeMiddleware(router))

	// start server
	log.Fatal(http.ListenAndServe(":8000", enhancedRouter))
}

func enableCORS(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// Set CORS headers
		w.Header().Set("Access-Control-Allow-Origin", "*") // Allow any origin
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		// Check if the request is for CORS preflight
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		// Pass down the request to the next middleware (or final handler)
		next.ServeHTTP(w, r)
	})

}

func jsonContentTypeMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// Set JSON Content-Type
		w.Header().Set("Content-Type", "application/json")
		next.ServeHTTP(w, r)
	})
}

// get all articles
func getArticles(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		rows, err := db.Query("SELECT id, title, description, author, categories, source_link, date, preview_image_url FROM articles")
		if err != nil {
			log.Fatal(err)
		}
		defer rows.Close()

		articles := []Article{} // array of articles
		for rows.Next() {
			var a Article
			var categoriesJSON []byte // To hold the JSONB categories data

			// Adjust the Scan to match the Article struct. Note the handling of categories as a JSONB blob.
			if err := rows.Scan(&a.ID, &a.Title, &a.Description, &a.Author, &categoriesJSON, &a.SourceLink, &a.Date, &a.PreviewImageUrl); err != nil {
				log.Fatal(err)
			}

			// Deserialize the categories JSONB blob into the Categories field of the Article struct
			if err := json.Unmarshal(categoriesJSON, &a.Categories); err != nil {
				log.Fatal("Error decoding categories JSONB:", err)
			}

			articles = append(articles, a)
		}
		if err := rows.Err(); err != nil {
			log.Fatal(err)
		}

		// Encode the slice of articles as JSON and send it in the response
		json.NewEncoder(w).Encode(articles)
	}
}

// getArticle retrieves a single article by its ID
func getArticle(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		vars := mux.Vars(r)
		id := vars["id"]

		var a Article
		var categoriesJSON []byte // To hold the JSONB categories data

		// Prepare the SELECT statement to fetch the article by its ID. Include the JSONB categories column.
		query := "SELECT id, title, description, author, categories, source_link, date, preview_image_url FROM articles WHERE id = $1"
		err := db.QueryRow(query, id).Scan(&a.ID, &a.Title, &a.Description, &a.Author, &categoriesJSON, &a.SourceLink, &a.Date, &a.PreviewImageUrl)
		if err != nil {
			if err == sql.ErrNoRows {
				w.WriteHeader(http.StatusNotFound)
				json.NewEncoder(w).Encode("Article not found")
			} else {
				log.Printf("Error retrieving article: %v\n", err)
				w.WriteHeader(http.StatusInternalServerError)
			}
			return
		}

		// Deserialize the categories JSONB blob into the Categories field of the Article struct
		if err := json.Unmarshal(categoriesJSON, &a.Categories); err != nil {
			log.Printf("Error decoding categories JSONB: %v\n", err)
			w.WriteHeader(http.StatusInternalServerError)
			return
		}

		// Encode and send the article as a JSON object in the response
		json.NewEncoder(w).Encode(a)
	}
}

// createArticle adds a new article to the database.
func createArticle(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var a Article
		json.NewDecoder(r.Body).Decode(&a)

		// Serialize the Categories slice to JSON for storing in the JSONB column.
		categoriesJSON, err := json.Marshal(a.Categories)
		if err != nil {
			log.Printf("Error marshaling categories: %v\n", err)
			w.WriteHeader(http.StatusInternalServerError)
			return
		}

		// Prepare the INSERT statement with placeholders for each attribute.
		query := `INSERT INTO articles (title, description, author, categories, source_link, date, preview_image_url)
                  VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id`

		// Execute the query with the article attributes. Use time.Time for the date directly.
		err = db.QueryRow(query, a.Title, a.Description, a.Author, categoriesJSON, a.SourceLink, a.Date, a.PreviewImageUrl).Scan(&a.ID)
		if err != nil {
			log.Printf("Error inserting new article: %v\n", err)
			w.WriteHeader(http.StatusInternalServerError)
			return
		}

		// Set the status code to indicate successful creation and return the newly created article, including its new ID.
		w.WriteHeader(http.StatusCreated)
		json.NewEncoder(w).Encode(a)
	}
}

// updateArticle updates an article's details in the database.
func updateArticle(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var a Article
		if err := json.NewDecoder(r.Body).Decode(&a); err != nil {
			w.WriteHeader(http.StatusBadRequest)
			return
		}

		categoriesJSON, err := json.Marshal(a.Categories)
		if err != nil {
			log.Fatal(err) // Consider handling errors more gracefully
		}

		_, err = db.Exec("UPDATE articles SET title = $1, description = $2, author = $3, categories = $4, source_link = $5, date = $6, preview_image_url = $7 WHERE id = $8",
			a.Title, a.Description, a.Author, categoriesJSON, a.SourceLink, a.Date, a.PreviewImageUrl, a.ID)
		if err != nil {
			log.Fatal(err) // Consider handling errors more gracefully
		}

		w.WriteHeader(http.StatusOK)
		json.NewEncoder(w).Encode(a) // Optionally return the updated article
	}
}

// deleteArticle removes an article from the database by its ID.
func deleteArticle(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		fmt.Println("reaching")
		vars := mux.Vars(r)
		id := vars["id"]

		_, err := db.Exec("DELETE FROM articles WHERE id = $1", id)
		if err != nil {
			log.Printf("Error deleting article: %v\n", err)
			w.WriteHeader(http.StatusInternalServerError)
			return
		}

		w.WriteHeader(http.StatusOK)
		json.NewEncoder(w).Encode(fmt.Sprintf("Article with ID %s deleted successfully", id))
	}
}

// get all users
func getUsers(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		rows, err := db.Query("SELECT * FROM users")
		if err != nil {
			log.Fatal(err)
		}
		defer rows.Close()

		users := []User{} // array of users
		for rows.Next() {
			var u User
			if err := rows.Scan(&u.Id, &u.Name, &u.Email); err != nil {
				log.Fatal(err)
			}
			users = append(users, u)
		}
		if err := rows.Err(); err != nil {
			log.Fatal(err)
		}

		json.NewEncoder(w).Encode(users)
	}
}

// get user by id
func getUser(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		vars := mux.Vars(r)
		id := vars["id"]

		var u User
		err := db.QueryRow("SELECT * FROM users WHERE id = $1", id).Scan(&u.Id, &u.Name, &u.Email)
		if err != nil {
			w.WriteHeader(http.StatusNotFound)
			return
		}

		json.NewEncoder(w).Encode(u)
	}
}

// create user
func createUser(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var u User
		json.NewDecoder(r.Body).Decode(&u)

		err := db.QueryRow("INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id", u.Name, u.Email).Scan(&u.Id)
		if err != nil {
			log.Fatal(err)
		}

		json.NewEncoder(w).Encode(u)
	}
}

// update user
func updateUser(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var u User
		json.NewDecoder(r.Body).Decode(&u)

		vars := mux.Vars(r)
		id := vars["id"]

		// Execute the update query
		_, err := db.Exec("UPDATE users SET name = $1, email = $2 WHERE id = $3", u.Name, u.Email, id)
		if err != nil {
			log.Fatal(err)
		}

		// Retrieve the updated user data from the database
		var updatedUser User
		err = db.QueryRow("SELECT id, name, email FROM users WHERE id = $1", id).Scan(&updatedUser.Id, &updatedUser.Name, &updatedUser.Email)
		if err != nil {
			log.Fatal(err)
		}

		// Send the updated user data in the response
		json.NewEncoder(w).Encode(updatedUser)
	}
}

// delete user
func deleteUser(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		vars := mux.Vars(r)
		id := vars["id"]

		var u User
		err := db.QueryRow("SELECT * FROM users WHERE id = $1", id).Scan(&u.Id, &u.Name, &u.Email)
		if err != nil {
			w.WriteHeader(http.StatusNotFound)
			return
		} else {
			_, err := db.Exec("DELETE FROM users WHERE id = $1", id)
			if err != nil {
				//todo : fix error handling
				w.WriteHeader(http.StatusNotFound)
				return
			}

			json.NewEncoder(w).Encode("User deleted")
		}
	}
}
