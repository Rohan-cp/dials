import React from 'react';
import { SafeAreaView, StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
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
    headerTitle: 'kno-logic',
    headerRight: () => {
      return (
        <TouchableOpacity onPress={() => {
          navigationData.navigation.navigate({routeName: 'Calendar'});
        }} >
          <View style={styles.iconContainer} >
            <AntDesign name="calendar" size={25} color="black" />
            <Text style={{fontSize: 8, textAlign: 'center', fontFamily: 'Lato_700Bold'}} >Today</Text>
          </View>
        </TouchableOpacity>
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