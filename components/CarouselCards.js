import React, { useCallback, useEffect } from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet, Dimensions, Image, TouchableHighlight } from "react-native";
import { getDailyDigest } from '../store/actions/articles';
export const SLIDER_WIDTH = Dimensions.get('window').width + (0.22 * Dimensions.get('window').width)
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const CarouselCards = (props) => {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDailyDigest())
  }, [dispatch]);

  const getArticles = useCallback(() => {
    dispatch(getDailyDigest());
  }, [dispatch]);

  const data = useSelector(state => {
    return state.articles.articles;
  });

  const navigateToArticle = (itemId) => {
    return props.navigation.navigate('Article', {
      id: itemId
    });
  };

  const CarouselCardItem = ({ item, index, }) => {
    return (
      <View style={styles.container} key={index}>
        <TouchableHighlight activeOpacity={1} underlayColor='white' onPress={() => {
          getArticles();
          navigateToArticle(item.id);
        }}>
          <View>
            <Image
              source={{ uri: item.photo }}
              style={styles.image}
            />
            <View style={styles.textContainer}>
              <View>
              <Text style={styles.header} numberOfLines={3}>{
                `${item.title}
              
                `}
              </Text>
              </View>
              <View style={styles.pack}>
                <Text style={{...styles.category, backgroundColor: item.category[0].color}}>{item.category[0].name}</Text>
                <Text style={styles.body}>{"By " + item.author}</Text>
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
        dotsLength={3}
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
    width: '100%',
    height: '72%',
  },
  header: {
    color: "#222",
    fontSize: 24,
    fontFamily: 'Lato_700Bold',
    paddingHorizontal: '7%',
    paddingTop: '1.5%',
  },
  body: {
    color: "black",
    fontSize: 16,
    padding: 9,
    textAlign: 'right',
    fontFamily: 'Lato_400Regular'
  },
  textContainer: {
    marginTop: 5,
  },
  category: {
    fontSize: 16,
    borderRadius: 20,
    paddingHorizontal: 9,
    paddingVertical: 9,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'black',
    fontFamily: 'Lato_700Bold'
  },
  pack: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: 'space-between'
  },
  imageContainer: {
    backgroundColor: 'black'
  }
})

export default CarouselCards;
