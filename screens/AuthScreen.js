import React, { useState, useReducer, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  View,
  StyleSheet,
  Alert,
  Image,
  ActivityIndicator,
} from "react-native";

import Colors from "../constants/Colors";
import LoginScreen from "../components/Login";
import SignupScreen from "../components/Signup";
import { signup, login } from "../store/actions/auth";

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
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

const AuthScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isCreateNew, setIsCreateNew] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    if (error) {
      Alert.alert('An Error Occurred!', error, [{ text: 'Okay' }])
    }
  }, [error]);

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
  const dispatch = useDispatch();

  const onSignup = async () => {
    // console.log(formState);
    setIsLoading(true);
    setError(null);
    try {
      await dispatch(
        signup(formState.inputValues.email, formState.inputValues.password)
      );
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  const onLogin = async () => {
    // console.log(formState);
    setIsLoading(true);
    try {
      await dispatch(
        login(formState.inputValues.email, formState.inputValues.password)
      );
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  };

  if (isCreateNew) {
    content = (
      <SignupScreen
        navigation={props.navigation}
        onSubmit={onSignup}
        onLogin={setIsCreateNew}
        inputChangeHandler={inputChangeHandler}
        isLoading={isLoading}
      />
    );
  } else {
    content = (
      <LoginScreen
        navigation={props.navigation}
        onSubmit={onLogin}
        onCreateNew={setIsCreateNew}
        inputChangeHandler={inputChangeHandler}
        isLoading={isLoading}
      />
    );
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
