import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SavedScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Sign in to get started!</Text>
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

export default SavedScreen;