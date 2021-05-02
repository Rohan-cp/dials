import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import CarouselCards from '../components/CarouselCards';

const HomeScreen = () => {
  return (
    <View style={{backgroundColor: '#E8EFF7'}}>
      <SafeAreaView style={styles.container}>
        <CarouselCards />
      </SafeAreaView>
    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8EFF7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
    marginTop: 20,
  },
});

export default HomeScreen;