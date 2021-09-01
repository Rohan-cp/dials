import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Entry from "../components/Entry";
import { fetchUserData } from "../store/actions/auth";

const ProfileScreen = (props) => {
  const data = useSelector((state) => {
    return state.auth;
  });
  let content;

  if (!data.tokenId && !__DEV__) {
    content = (
      <View style={styles.screen}>
        <Text>You need to sign in to see your profile!</Text>
        <Button
          title="Signup Page"
          onPress={() => props.navigation.navigate("Auth")}
        />
      </View>
    );
  } else {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchUserData());
    }, [dispatch]);

    let userdata = useSelector((state) => {
      return state.auth;
    });

    if (__DEV__) {
      userdata = {
        displayName: "Rcpgijopkokpkpkpk",
        emailId: "rohancp9@gmail.com",
        password: "*********",
      };
    }

    content = (
      <View style={styles.profileScreen}>
        <View style={{ marginTop: "5%", marginLeft: "12%", maxWidth: '75%' }}>
          <Text style={styles.greeting} numberOfLines={1} >Hey, {userdata.displayName}</Text>
        </View>
        <View style={styles.displayBox}>
          <Entry category="Display Name" userdata={userdata.displayName} navigation={props.navigation} />
          <Entry category="Email" userdata={userdata.emailId} navigation={props.navigation} />
          <Entry category="Password" userdata={userdata.password} navigation={props.navigation} />
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={() => {}} style={styles.signOutButton}>
            <Text style={styles.signOutButtonText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  return content;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  profileScreen: {
    flex: 1,
    backgroundColor: "#E8EFF7",
  },
  greeting: {
    fontSize: 35,
    fontWeight: "300",
  },
  displayBox: {
    backgroundColor: "white",
    marginHorizontal: "12%",
    marginTop: 15,
    borderRadius: 8,
  },
  signOutButton: {
    borderRadius: 10,
    backgroundColor: "#3480FF",
    marginTop: 20,
    paddingVertical: 15,
    marginBottom: 5,
    width: "76%",
  },
  signOutButtonText: {
    color: "white",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
  },
});

export default ProfileScreen;
