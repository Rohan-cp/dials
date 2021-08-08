import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import CarouselCards from "../components/CarouselCards";
import { AntDesign } from "@expo/vector-icons";

const HomeScreen = (props) => {
  const [selectedDate, setSelectedDate] = useState(Date());
  console.log(selectedDate);
  useEffect(() => {
    props.navigation.setParams({
      date: selectedDate,
    });
  }, []);

  useEffect(() => {
    setSelectedDate(props.navigation.getParam.date);
  }, [props.navigation.getParam.date]);

  return <CarouselCards navigation={props.navigation} />;
};

HomeScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: "kno-logic",
    headerRight: () => {
      return (
        <TouchableOpacity
          onPress={() => {
            navigationData.navigation.navigate("Calendar");
          }}
        >
          <View style={styles.iconContainer}>
            <AntDesign name="calendar" size={25} color="black" />
            <Text
              style={{
                fontSize: 8,
                textAlign: "center",
                fontFamily: "Lato_700Bold",
              }}
            >
              Today
            </Text>
          </View>
        </TouchableOpacity>
      );
    },
  };
};

const styles = StyleSheet.create({
  iconContainer: {
    paddingRight: 15,
  },
});

export default HomeScreen;
