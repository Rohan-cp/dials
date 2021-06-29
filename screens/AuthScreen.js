import React, { useState, useReducer, useCallback, useEffect } from "react";
import {
  View,
  StyleSheet,
  Alert,
  Image,
} from "react-native";

import Colors from "../constants/Colors";
import LoginScreen from "../components/Login";
import SignupScreen from "../components/Signup";

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    console.log(action.input);
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues,
    };
  }
  return state;
};

const AuthScreen = props => {
  const [isCreateNew, setIsCreateNew] = useState(false);
  const [error, setError] = useState();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: "",
      password: "",
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });

  useEffect(() => {
    if (error) {
      Alert.alert("An Error Occurred!", error, [{ text: "Okay" }]);
    }
  }, [error]);

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState]
  );

  let content;

  if (isCreateNew) {
    content =  <SignupScreen navigation={props.navigation} onLogin={setIsCreateNew} inputChangeHandler={inputChangeHandler} />
  } else {
    content = <LoginScreen navigation={props.navigation} onCreateNew={setIsCreateNew} inputChangeHandler={inputChangeHandler} />;
  }

  return (
    <View style={styles.screen}>
      <Image source={require("../assets/logo.png")} style={styles.image} />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 40,
    marginBottom: "10%",
    marginTop: "25%",
  },
});

export default AuthScreen;
