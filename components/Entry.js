import React from "react";
import {
  View,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  Text,
} from "react-native";

const Entry = (props) => {
  return (
    <View style={styles.screen}>
      <View>
        <View style={{marginBottom: 7,}}>
          <Text style={styles.categoryText}>{props.category}</Text>
        </View>

        <Text style={styles.userdataText}>{props.userdata}</Text>
      </View>
      <TouchableOpacity onPress={props.onPress} style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: "6%",
    marginVertical: '6%',
    width: "87%",
  },
  editButton: {
    backgroundColor: "#3480FF",
    height: 34,
    width: 69,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
  },
  editButtonText: {
    color: "rgba(255,255,255,0.9)",
    fontSize: 15,
  },
  categoryText: {
    fontSize: 14,
  },
  userdataText: {
    fontSize: 16,
  },
});

export default Entry;
