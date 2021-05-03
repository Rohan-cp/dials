import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import CarouselCards from '../components/CarouselCards';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/CustomHeaderButton';


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
    headerRight:
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Calendar"
          iconName={"ios-calendar"}
          size={27}
          onPress={() => {
            console.log("it works!");
          }}
        />
      </HeaderButtons>
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
});

export default HomeScreen;