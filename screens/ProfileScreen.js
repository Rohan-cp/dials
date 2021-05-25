import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ProfileScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>You need to sign in to setup your profile!</Text>
      <Button title='Signup Page' onPress={() => props.navigation.navigate('Auth') } />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default ProfileScreen;