import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const SavedItem = (props) => {
  return (
    <TouchableOpacity onPress={() => props.onSelect(props.item.id)} activeOpacity={0.7}>
      <View style={styles.root}>
        <View style={styles.imageContainer}>
          <ImageBackground
            source={{ uri: props.item.photo }}
            style={{
              flex: 1,
              resizeMode: "cover",
              justifyContent: "center",
            }}
          ></ImageBackground>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title} numberOfLines={3}>
            {props.item.title + "\n\n"}
          </Text>
          <Text style={styles.byLine}>By {props.item.author}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    height: 100,
    backgroundColor: "white",
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    flexDirection: "row",
  },
  imageContainer: {
    width: 70,
    height: 70,
    margin: 16,
    borderRadius: 11,
    overflow: "hidden",
  },
  textContainer: {
    flexDirection: "column",
    flexShrink: 1,
    marginTop: 20,
  },
  title: {
    flexShrink: 1,
    fontSize: 16,
    fontWeight: "bold",
    width: "100%",
  },
  byLine: {
    marginLeft: "50%",
  },
});

export default SavedItem;
