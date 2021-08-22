import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useSelector } from "react-redux";
import Entry from "../components/Entry";
import { fetchUserData } from "../store/actions/auth";

const ProfileScreen = (props) => {
  const data = useSelector((state) => {
    return state.auth;
  });
  let content;

  if (!data.tokenId) {
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
    useEffect(() => {
      dispatch(fetchUserData());
    }, [dispatch]);

    userdata = useSelector((state) => {
      return state.auth;
    });

    content = (
      <View style={styles.profileScreen}>
        <View style={{marginTop: '5%'}}>
          <Text style={styles.greeting}>Hey, Rohan</Text>
        </View>
        <View style={styles.displayBox}>
          <Entry />
          <Entry />
          <Entry />
        </View>
        <Button
          title="Sign Out"
          onPress={() => {}}
        />
      </View>
    );
  }
  return { content };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  profileScreen: {
    flex: 1,
    alignItems: "center",
  },
  greeting: {
    fontSize: 35,
  },
  displayBox: {
    backgroundColor: 'rgba(142, 195, 255, 0.4)',
  }
});

export default ProfileScreen;
