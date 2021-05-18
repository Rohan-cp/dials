import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity, Linking, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const ArticleScreen = props => {
  const [ isSelected, setIsSelected ] = useState(false);

  const onSaveHandler = () => {
    setIsSelected(!isSelected);
  }

  useEffect(() => {
    props.navigation.setParams({
      toggleSave: onSaveHandler,
    });
  }, []);

  useEffect(() => {
    props.navigation.setParams({
      isArticleSelected: isSelected,
    });
  }, [isSelected]);
  const articleId = props.navigation.getParam('id');
  const article = useSelector(state => {
    return state.articles.articles.find(article => article.id == articleId)
  });
  console.log(article.imgUrl);
  return(
    <ScrollView>
      <View style={styles.screen}>
        <View style={styles.titleContainer}>
          <Text style={styles.title} >{article.title}</Text>
        </View>
        <Image source={{uri: article.imgUrl}} />
        <Text style={styles.body}>{article.body}</Text>
        <Button title='Visit source to read more!' onPress={() => Linking.openURL(article.articleUrl)} />
      </View>
    </ScrollView>
  );
}

ArticleScreen.navigationOptions = navigationData => {
  const isSelected = navigationData.navigation.getParam('isArticleSelected');
  const toggleSave = navigationData.navigation.getParam('toggleSave');
  let iconName;
  isSelected ? iconName = "ios-bookmark" : iconName = "ios-bookmark-outline";
  return {
    headerRight: () => {
      return (
        <View style={styles.iconContainer} >
          <TouchableOpacity onPress={toggleSave} >
            <Ionicons name={iconName} size={25} color={'black'}/>
          </TouchableOpacity>
        </View>
      );
    },
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 24,
    fontFamily: 'Lato_700Bold',
    textAlign: 'center',
  },
  body: {
    paddingHorizontal: '5%',
    paddingTop: 10,
    fontSize: 16,
  },
  titleContainer: {
    margin: '3%',
  },
  iconContainer: {
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ArticleScreen;