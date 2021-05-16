import React, { useCallback } from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet, Dimensions, Image, TouchableHighlight } from "react-native";
import { getDailyDigest } from '../store/actions/articles';
export const SLIDER_WIDTH = Dimensions.get('window').width + 90
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
        <TouchableHighlight activeOpacity={1} underlayColor='white' onPress={() => {
        getArticles();
        navigateToArticle();
      }}>
        <View>
        <Image
          source={{ uri: item.imgUrl }}
          style={styles.image}
        />
          <View>
            <View style={styles.textContainter}>
              <Text style={styles.header} numberOfLines={3} >{item.title}</Text>
              <View style={styles.pack}>
                <Text style={{...styles.category, backgroundColor: item.color}}>{item.category}</Text>
                <Text style={styles.body}>{item.body}</Text>
              </View>
            </View>
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
          width: 7,
          height: 7,
          borderRadius: 3.5,
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
      height: 1,
    },
    shadowOpacity: 0.21,
    shadowRadius: 2.2,

    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: '72%',
  },
  header: {
    color: "#222",
    fontSize: 24,
    fontFamily: 'Lato_700Bold',
    paddingHorizontal: '7%',
    paddingTop: 5,
  },
  body: {
    color: "#222",
    fontSize: 16,
    padding: 9,
    textAlign: 'right',
    fontFamily: 'Lato_400Regular'
  },
  textContainter: {
    marginTop: 5,
  },
  category: {
    fontSize: 15,
    borderRadius: 19,
    paddingHorizontal: 9,
    paddingVertical: 9,
    overflow: 'hidden',
    fontFamily: 'Lato_700Bold'
  },
  pack: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: 'space-between'
  }
})

export default CarouselCards;
