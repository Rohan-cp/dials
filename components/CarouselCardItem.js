import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, TouchableHighlight } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width + 110
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)


const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image
        source={{ uri: item.imgUrl }}
        style={styles.image}
      />
      
      <TouchableHighlight underlayColor='white' onPress={() => {}}>
        <View style={styles.textContainter}>
          <Text style={styles.header}>{item.title}</Text>
          <Text style={styles.body}>{item.body}</Text>
        </View>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: '63%',
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20,
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingTop: 20,
    paddingRight: 20,
    textAlign: 'right',
  },
  textContainter: {
    marginTop: 10,
  }
})


export default CarouselCardItem
