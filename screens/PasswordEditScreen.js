import React, { useEffect } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { updateCopy, updateCurr, updateNew } from "../store/actions/temp";

const PasswordEditScreen = (props) => {
  const data = useSelector((state) => {
    return state.temp;
  });

  useEffect(() => {
    props.navigation.setParams(data);
  }, [data]);
  const dispatch = useDispatch();
  return (
    <View style={{ alignItems: "center" }}>
      <TextInput
        style={styles.input}
        onChangeText={(val) => dispatch(updateCurr(val))}
        value={data.currentPwd}
        placeholder="Current password"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        onChangeText={(val) => dispatch(updateNew(val))}
        value={data.newPwd}
        placeholder="Enter new password"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        onChangeText={(val) => dispatch(updateCopy(val))}
        value={data.copyNewPwd}
        placeholder="Re-enter new password"
        secureTextEntry={true}
      />
    </View>
  );
};

PasswordEditScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Password",
    headerRight: () => (
      <Button
        onPress={() => {
          const data = {
            currentPwd: navigationData.route.params?.currentPwd,
            newPwd: navigationData.route.params?.currentPwdnewPwd,
            copyNewPwd: navigationData.route.params?.currentPwdcopyNewPwd,
          };
        }}
        title="Done"
        color="black"
      />
    ),
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

export default PasswordEditScreen;
