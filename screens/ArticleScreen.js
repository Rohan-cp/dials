import React, { useState, useEffect, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  TouchableOpacity,
  Linking,
  Image,
} from "react-native";
import { useSelector } from "react-redux";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import data from "../data/dummy-data";
import Colors from "../constants/Colors";

const ArticleScreen = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  const articleId = props.route.params?.id ?? "";

  const onToggleSaveHandler = () => {
    setIsSelected((prevState) => {
      if (!prevState == true) {
        saveArticle(articleId);
      } else {
        removeSaveArticle(articleId);
      }
      return !prevState;
    });
  };

  useEffect(() => {
    fetchSavedArticleIds();
  }, [fetchSavedArticleIds]);

  const saveArticle = async (newArticleId) => {
    try {
      let savedArticleIds = await getSavedArticleIds();
      if (!savedArticleIds || savedArticleIds.length == 0) {
        console.log("2");
        savedArticleIds = [newArticleId];
      } else if (savedArticleIds && !savedArticleIds.includes(newArticleId)) {
        savedArticleIds.push(newArticleId);
      }
      const jsonValue = JSON.stringify(savedArticleIds);
      await AsyncStorage.setItem("@articles_saved", jsonValue);
      fetchSavedArticleIds();
    } catch (e) {
      console.log("e", e);
    }
  };

  const removeSaveArticle = async (newArticleId) => {
    try {
      let savedArticleIds = await fetchSavedArticleIds();
      if (savedArticleIds && savedArticleIds.includes(newArticleId)) {
        savedArticleIds = savedArticleIds.filter((id) => id !== newArticleId);
      }
      const jsonValue = JSON.stringify(savedArticleIds);
      await AsyncStorage.setItem("@articles_saved", jsonValue);
      fetchSavedArticleIds();
    } catch (e) {
      console.log("e", e);
    }
  };

  const fetchSavedArticleIds = async () => {
    let savedArticleIds = await getSavedArticleIds();
    if (!savedArticleIds) {
      savedArticleIds = [];
    }
    setIsSelected(savedArticleIds.includes(articleId));
    return savedArticleIds;
  };

  const getSavedArticleIds = useCallback(async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@articles_saved");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log("error", error);
    }
    console.log("Done.");
  }, []);

  useEffect(() => {
    let iconName = isSelected
      ? (iconName = "ios-bookmark")
      : (iconName = "ios-bookmark-outline");
    props.navigation.setOptions({
      headerRight: () => (
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={onToggleSaveHandler}>
            <Ionicons name={iconName} size={27} color={"black"} />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [props.navigation, isSelected]);

  let article = "";

  if (__DEV__) {
    article = data.find((article) => article.id == articleId);
  } else {
    article = useSelector((state) => {
      return state.articles.articles.find((article) => article.id == articleId);
    });
  }

  return (
    <ScrollView style={{ backgroundColor: Colors.primaryColor }}>
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{article.title}</Text>
        </View>
        <Text style={styles.body}>{article.description}</Text>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={styles.sourceButton}
            onPress={() => Linking.openURL(article.link)}
          >
            <Text style={styles.sourceButtonText}>
              Visit source to read more!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

ArticleScreen.navigationOptions = (navigationData) => {
  return {
    headerRight: () => {
      return null;
    },
  };
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.primaryColor,
  },
  title: {
    paddingHorizontal: "2%",
    fontSize: 26.4,
    fontWeight: "600",
    textAlign: "left",
  },
  body: {
    paddingHorizontal: "5%",
    paddingTop: 10,
    fontWeight: "400",
    fontSize: 16.7,
    lineHeight: 30,
  },
  titleContainer: {
    margin: "3%",
  },
  iconContainer: {
    marginRight: 10,
  },
  image: {
    width: "100%",
    height: "50%",
  },
  sourceButton: {
    borderRadius: 10,
    backgroundColor: "#3480FF",
    marginTop: 15,
    marginBottom: 17,
    paddingVertical: 15,
    width: "65%",
  },
  sourceButtonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "500",
    textAlign: "center",
  },
});

export default ArticleScreen;
