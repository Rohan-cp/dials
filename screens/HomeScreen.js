import React from 'react';
import { SafeAreaView, StyleSheet, View, Image } from 'react-native';
import CarouselCards from '../components/CarouselCards';
import { AntDesign } from '@expo/vector-icons'; 

const HomeScreen = props => {
  return (
    <View style={{backgroundColor: '#E8EFF7'}}>
      <SafeAreaView style={styles.container}>
        <CarouselCards navigation={props.navigation}/>
      </SafeAreaView>
    </View>
  );
};

HomeScreen.navigationOptions = navigationData => {
  return {
    headerTitle: () => {
      <View>
        <Image source={{uri: 'https://imgur.com/P2nDq7b.png'}} />
      </View>
    },
    headerRight: () => {
      return (
      <View style={styles.iconContainer} >
        <AntDesign name="calendar" size={25} color="black" />
      </View>
      );
    }
  };
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8EFF7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
    marginTop: 20,
  },
  iconContainer: {
    paddingRight: 15
  }
});

export default HomeScreen;