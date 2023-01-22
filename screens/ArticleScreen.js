import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
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
import dummyData from "../data/dummy-data";
import Colors from "../constants/Colors";

const ArticleScreen = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  const articleId = props.navigation.getParam("id");

  const onSaveHandler = () => {
    setIsSelected((prevState) => {
      const newState = !prevState
      if (newState) {
        storeData(articleId)
      }
      return newState
    }

    );
  };
  
  const getMyObject = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_key')
      console.log("--------------------------->")
      console.log("jsonValue", jsonValue)
      return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch(e) {
      // read error
    }

    console.log('Done.')
  }

  const storeData = async (value) => {
    try {
      // console.log("storeData value", value)
      const newItem = await getMyObject()
      console.log("old item", newItem)
      newItem.saved ? newItem.saved.push(value) : newItem.saved = [value]
      const jsonValue = JSON.stringify(newItem)
      console.log("newItem", newItem)
      await AsyncStorage.setItem('@storage_key', jsonValue)
    } catch (e) {
      // saving error
    }
  }

  useEffect(() => {
    props.navigation.setParams({
      toggleSave: onSaveHandler,
    });
  }, []);

  useEffect(() => {
    props.navigation.setParams({
      isArticleSelected: isSelected,
    });
  }, [isSelected]);

  let article = "";
  
  if (__DEV__) {
    article = dummyData.find((article) => article.id == articleId);
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
  const isSelected = navigationData.navigation.getParam("isArticleSelected");
  const toggleSave = navigationData.navigation.getParam("toggleSave");
  let iconName;
  isSelected
    ? (iconName = "ios-bookmark")
    : (iconName = "ios-bookmark-outline");
  return {
    headerRight: () => {
      return (
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={toggleSave}>
            <Ionicons name={iconName} size={25} color={"black"} />
          </TouchableOpacity>
        </View>
      );
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
    fontSize: 17.6,
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
