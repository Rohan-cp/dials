import React, { useCallback, useFocusEffect, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, StyleSheet, FlatList } from "react-native";
import SavedItem from "../components/SavedItem";
import Colors from "../constants/Colors";
import data from "../data/dummy-data";
import { useDispatch, useSelector } from "react-redux";

const SavedScreen = (props) => {
  const [articleData, setArticleData] = useState(data);
  const DATA = data;

  const navigateToArticle = (itemId) => {
    return props.navigation.navigate("Article", {
      id: itemId,
    });
  };

  const renderSavedItem = (itemData) => {
    return <SavedItem onSelect={navigateToArticle} item={itemData.item} />;
  };

  const fetchSavedArticles = useCallback(async () => {
    const savedArticleIds = await getMyArticlesData();
    console.log("here------->");
    setArticleData((c) =>
      c.filter((article) => savedArticleIds.includes(article.id))
    );
  }, []);

  useEffect(() => {
    fetchSavedArticles().catch((e) => console.log(e));
  }, [fetchSavedArticles]);

  const getMyArticlesData = useCallback(async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@articles_saved");
      console.log("jsonValue", jsonValue);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log("error", error);
    }
    console.log("Done.");
  }, []);

  return (
    <View style={styles.screen}>
      <FlatList
        data={articleData}
        keyExtractor={(item) => item.id}
        renderItem={renderSavedItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primaryColor,
  },
});

export default SavedScreen;
