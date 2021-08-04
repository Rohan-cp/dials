import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import SavedItem from '../components/SavedItem';
import Colors from '../constants/Colors';
import data from '../data/dummy-data';
import Article from "../models/Article";

const SavedScreen = props => {
  const DATA = data;

  const navigateToArticle = (itemId) => {
    return props.navigation.navigate('Article', {
      id: itemId
    });
  };

  const renderSavedItem = itemData => {
    return <SavedItem onSelect={navigateToArticle} item={itemData.item} />;
  };

  return (
    <View style={styles.screen}>
      <FlatList 
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={renderSavedItem}
        style={{width: '100%'}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primaryColor,
  }
});

export default SavedScreen;