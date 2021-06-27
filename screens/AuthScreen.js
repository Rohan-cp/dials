import React, { useState, useReducer, useCallback, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Alert,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";

import Input from "../components/Input";
import Colors from "../constants/Colors";
import * as authActions from "../store/actions/auth";

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

const AuthScreen = () => {
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

  return (
    <View style={styles.screen}>
      <Image source={require("../assets/logo.png")} style={styles.image} />
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 17, color: "#202020", fontWeight: "300" }}>
          If you are new /{" "}
        </Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={{ color: "#3480FF", fontSize: 17, fontWeight: "300" }}>
            Create New
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ width: "65%", paddingTop: 30 }}>
        <ScrollView>
          <Input
            id="email"
            label="Email Address"
            keyboardType="email-address"
            required
            email
            autoCapitalize="none"
            errorText="Please enter a valid email address."
            onInputChange={inputChangeHandler}
            initialValue=""
          />
          <Input
            id="password"
            label="Password"
            keyboardType="default"
            required
            secureTextEntry
            minLength={5}
            autoCapitalize="none"
            errorText="Please enter a valid password."
            onInputChange={inputChangeHandler}
            initialValue=""
          />
        </ScrollView>
      </View>
      <View style={{ flexDirection: "row", paddingTop: 30 }}>
        <Text style={{ fontSize: 16, color: "#202020", fontWeight: "300" }}>
          Forgot Password? /{" "}
        </Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={{ color: "#3480FF", fontSize: 16, fontWeight: "300" }}>
            Reset
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {}}
        style={{
          borderRadius: 10,
          backgroundColor: "#3480FF",
          marginTop: 30,
          paddingVertical: 15,
          paddingHorizontal: 90,
          width: '65%'
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "400",
            textAlign: 'center'
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
    alignItems: "center",
  },
  authContainer: {
    width: "80%",
    maxWidth: 400,
    maxHeight: 400,
    padding: 20,
  },
  buttonContainer: {
    marginTop: 10,
  },
  image: {
    width: 150,
    height: 40,
    marginBottom: "10%",
    marginTop: "25%",
  },
});

export default AuthScreen;
