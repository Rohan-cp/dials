import React, { useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import CarouselCards from "../components/CarouselCards";
import { AntDesign } from "@expo/vector-icons";
import DUMMY_DATA from "../data/dummy-data";
import { useDispatch, useSelector } from "react-redux";

const HomeScreen = (props) => {
  const dispatch = useDispatch();
  let data = "";

  if (__DEV__) {
    data = DUMMY_DATA.filter(
      (article) =>
        article.id == "a1" ||
        article.id == "a2" ||
        article.id == "a3"
    );
  } else {
    const currDate = useSelector((state) => {
      // console.log(state.date.date);
      return state.date.date;
    });
    useEffect(() => {
      dispatch(getDateDigest(currDate));
    }, [dispatch, currDate]);

    data = useSelector((state) => {
      return state.articles.articles;
    });
  }

  return <CarouselCards navigation={props.navigation} data={data} />;
};

HomeScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: "kno-logic",
  };
};

const styles = StyleSheet.create({
  iconContainer: {
    paddingRight: 15,
  },
});

export default HomeScreen;
