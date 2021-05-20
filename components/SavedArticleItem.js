import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const SavedArticleItem = props => {
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: props.photo}} />
      </View>
      <View>
        <Text>Title Goes here</Text>
        <View style={styles.body} >
          <Text>Category</Text>
          <Text>By line</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    overflow: 'hidden',
    margin: 40,
    borderRadius: 10,
  },
  body: {
    flexDirection: 'row'
  }
})

export default SavedArticleItem;