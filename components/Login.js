import React from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";

import Input from "./Input";

const LoginScreen = props => {
  return (
    <>
    <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 17, color: "#202020", fontWeight: "300" }}>
          If you are new /{" "}
        </Text>
        <TouchableOpacity
          onPress={() => {
            props.onCreateNew((prevState) => !prevState);
          }}
        >
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
        </ScrollView>
      </View>
      <View style={{ flexDirection: "row", paddingTop: 30 }}>
        <Text style={{ fontSize: 15, color: "rgba(2, 2, 2, 0.7)", fontWeight: "300" }}>
          Forgot Password? /{" "}
        </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Reset')}>
          <Text style={styles.resetButtonText}>Reset</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={props.onSubmit} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Login</Text>
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
    marginBottom: 5,
    width: "65%",
  },
  resetButtonText: { color: "#3480FF", fontSize: 15, fontWeight: "300" },
});

export default LoginScreen;