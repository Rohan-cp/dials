import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

const EditUserdataScreen = (props) => {
  const [val, setVal] = useState(props.navigation.getParam("initialVal"));
  const inputChangeHandler = (newVal) => {
    setVal(newVal);
  };
  return (
    <View style={{ alignItems: "center" }}>
      <TextInput
        style={styles.input}
        onChangeText={inputChangeHandler}
        value={val}
        autoFocus={true}
      />
    </View>
  );
};

EditUserdataScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: navigationData.navigation.getParam("title"),
    headerRight: () => <Button onPress={() => {console.log('hi')}} title="Done" color="black" />,
  };
};

const styles = StyleSheet.create({
  input: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "white",
    marginTop: 20,
    width: "80%",
  },
});

export default EditUserdataScreen;
