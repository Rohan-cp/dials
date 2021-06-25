import React from 'react';
import { SafeAreaView, StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import CarouselCards from '../components/CarouselCards';
import { AntDesign } from '@expo/vector-icons'; 

const HomeScreen = props => {
  return (
    <CarouselCards navigation={props.navigation}/>
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
  iconContainer: {
    paddingRight: 15
  }
});

export default HomeScreen;