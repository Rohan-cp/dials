import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import MainNavigator from './navigator/MainNavigator';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <MainNavigator/>
  );

  return (
    <View style={{backgroundColor: '#E8EFF7'}}>
      <SafeAreaView style={styles.container}>
        <CarouselCards />
      </SafeAreaView>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8EFF7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
    marginTop: 85,
  },
});

