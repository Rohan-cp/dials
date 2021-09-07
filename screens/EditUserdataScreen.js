import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import { updateUsername } from "../store/actions/updateUserdata";

const EditUserdataScreen = (props) => {
  const [val, setVal] = useState(props.navigation.getParam("initialVal"));
  const [err, setErrText] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isBlur, setIsBlur] = useState(false);
  const title = props.navigation.getParam("title");

  const inputChangeHandler = (newVal) => {
    setVal(newVal);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (isBlur) {
      if (title === "Display Name") {
        setErrText("Username already taken. Try again.");
        setIsValid(dispatch(isValidUsername(val)));
      } else if (title === "Email") {
        const response = dispatch(isValidEmail(val));
        // setErrText based on whether email is valid or email is already in use for other acc
        // setIsValid based on what is returned from reducer
      }
    }
  }, [isBlur, dispatch]);

  let onDone;

  if (title === "Display Name") {
    onDone = useCallback(() => dispatch(updateUsername(val)));
  } else if (title === "Email") {
    onDone = useCallback(() => dispatch(updateEmail(val)));
  }

  useEffect(() => {
    props.navigation.setParams({
      onDone: onDone,
    });
  }, [val, dispatch]);

  useEffect(() => {
    props.navigation.setParams({ valid: isValid });
  }, [isValid]);

  return (
    <View style={{ alignItems: "center" }}>
      <TextInput
        style={styles.input}
        onChangeText={inputChangeHandler}
        value={val}
        autoFocus={true}
        onBlur={() => setIsBlur(true)}
      />
    </View>
  );
};

EditUserdataScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: navigationData.navigation.getParam("title"),
    headerRight: () => {
      return (
        <View style={{ paddingRight: 7 }}>
          <TouchableOpacity
            onPress={() => {
              console.log("hi");
              navigationData.navigation.getParam("onDone")();
              console.log("9999");
              navigationData.navigation.goBack();
            }}
            disabled={navigationData.navigation.getParam("valid")}
          >
            <Text style={styles.submitButtonText}> Save </Text>
          </TouchableOpacity>
        </View>
      );
    },
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
    backgroundColor: "red",
  },
  submitButtonText: {
    fontWeight: "500",
    fontSize: 18,
  },
});

export default EditUserdataScreen;
