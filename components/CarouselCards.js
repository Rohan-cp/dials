import React, { useCallback } from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet, Dimensions, Image, TouchableHighlight } from "react-native";
import { getDailyDigest } from '../store/actions/articles';
export const SLIDER_WIDTH = Dimensions.get('window').width + 110
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const CarouselCards = (props) => {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);

  const data = useSelector(state => {
    return state.articles.articles;
  });

  const dispatch = useDispatch();

  const getArticles = useCallback(() => {
    dispatch(getDailyDigest());
  }, [dispatch]);

  const navigateToArticle = () => {
    return props.navigation.navigate({routeName: 'Article'});
  };

  const CarouselCardItem = ({ item, index, }) => {
    return (
      <View style={styles.container} key={index}>
        <Image
          source={{ uri: item.imgUrl }}
          style={styles.image}
        />
        <TouchableHighlight underlayColor='white' onPress={() => {
          getArticles();
          navigateToArticle();
        }}>
          <View>
            <View style={styles.pack}>
                <Text style={{...styles.category, backgroundColor: item.color}}>{item.category}</Text>
            </View>
            <View style={styles.textContainter}>
              <Text style={styles.header}>{item.title}</Text>
              <Text style={styles.body}>{item.body}</Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    )
  }

  return (
    <View>
      <Carousel
        layout="tinder"
        layoutCardOffset={8}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.92)'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
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
    height: '67%',
  },
  header: {
    color: "#222",
    fontSize: 24,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 5,
  },
  body: {
    color: "#222",
    fontSize: 16,
    paddingLeft: 20,
    paddingTop: 10,
    paddingRight: 20,
    textAlign: 'right',
  },
  textContainter: {
    marginTop: 5,
  },
  category: {
    fontSize: 15,
    borderRadius: 19,
    padding: 9,
    overflow: 'hidden',
  },
  pack: {
    marginLeft: 20,
    marginTop: 15,
    alignItems: 'flex-start',
  }
})

export default CarouselCards;
