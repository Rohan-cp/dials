import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Input from "../components/Input";

const ResetPasswordPage = (props) => {
  return (
    <View>
      <Text>Enter the email address your account was created with</Text>
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
      <TouchableOpacity onPress={() => {}} style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  confirmButton: {
    borderRadius: 10,
    backgroundColor: "#3480FF",
    marginTop: 30,
    paddingVertical: 15,
    paddingHorizontal: 90,
    width: "65%",
  },
  confirmButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
  },
});

export default ResetPasswordPage;
