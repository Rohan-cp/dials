import React from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";

import Input from "./Input";

const SignupScreen = props => {
  return (
    <>
    <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 17, color: "#202020", fontWeight: "300" }}>
          If you have an account /{" "}
        </Text>
        <TouchableOpacity
          onPress={() => {
            props.onLogin((prevState) => !prevState);
          }}
        >
          <Text style={{ color: "#3480FF", fontSize: 17, fontWeight: "300" }}>
            Login
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
            onInputChange={props.inputChangeHandler}
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
            onInputChange={props.inputChangeHandler}
            initialValue=""
          />
          <Input
            id="confirm password"
            label="Confirm Password"
            keyboardType="default"
            required
            secureTextEntry
            minLength={5}
            autoCapitalize="none"
            errorText="Please enter a valid password."
            onInputChange={props.inputChangeHandler}
            initialValue=""
          />
        </ScrollView>
      </View>
      <TouchableOpacity onPress={() => {}} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Sign Up</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  authContainer: {
    width: "80%",
    maxWidth: 400,
    maxHeight: 400,
    padding: 20,
  },
  buttonContainer: {
    marginTop: 10,
  },
  submitButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
  },
  submitButton: {
    borderRadius: 10,
    backgroundColor: "#3480FF",
    marginTop: 30,
    paddingVertical: 15,
    paddingHorizontal: 90,
    width: "65%",
  },
  resetButtonText: { color: "#3480FF", fontSize: 16, fontWeight: "300" },
});

export default SignupScreen;