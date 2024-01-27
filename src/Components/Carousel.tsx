import { Animated, Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'


const Carousel = () => {
    const [index, setIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    return (
        <View style = {{flex :1}}>

            <View style = {{flex : 1}}>
            <FlatList
                style = {styles.flatList}
                data={Slides}
                renderItem={({ item }) => <SlideItem item={item} />}
                horizontal
                pagingEnabled
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
            />

{/* <Pagination data={Slides} scrollX={scrollX} index={index} /> */}
            </View>
            {/* <Text > dd</Text> */}
            <View style = {{ flex : 0.1}}>
            <Pagination data={Slides} scrollX={scrollX} index={index} />
            
            </View>
        </View>
        
    )
}

const SlideItem = ({item}) => {
  return (
    <View style={styles.sliderItem}>
      <Image source={item.img} resizeMode="contain" style={styles.image}/>
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  )
}

const Pagination = ({data, scrollX, index}) => {
  return (
    <View style={{flex : 1}}>
        <View style = {{flex : 1, flexDirection : 'row'}}>
        {data.map((_, idx) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];

        const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [12, 30, 12],
            extrapolate: 'clamp',
          });

          const backgroundColor = scrollX.interpolate({
            inputRange,
            outputRange: ['#ccc', '#000', '#ccc'],
            extrapolate: 'clamp',
          });

        <View
        // key={idx.toString()}
        style={[
        //   styles.dot,
        //   {width: dotWidth, backgroundColor},
          {flex :1 ,backgroundColor : 'red', height : 5, width}
        //   idx === index && styles.dotActive,
        ]}
      />
      })}

        </View>


      {/* <View style = {{flex : 1, backgroundColor : 'green'}}/> */}
    </View>
  )
}

export default Carousel

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        width,
        height,
      alignItems: 'center',
    },
    image: {
      flex: 0.6,
      width: '80%',
      marginTop : 20
    },
    content: {
      flex: 0.4,
      alignItems: 'center',
      marginTop : 20
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign : 'center',
      color: '#333',
    },
    description: {
      fontSize: 18,
      marginVertical: 12,
      textAlign : 'center',
      color: '#333',
    },
    flatList : {
        // flex : 1,
        // backgroundColor :  "#000",
        // alignContent : 'center',
        // alignItems : "center"
        // justifyContent : 'center'
    },
    pagination : {
        position: 'absolute',
        bottom: 35,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    sliderItem : {
        width,
        // height,
      alignItems: 'center',
      justifyContent : 'center'
    },
    dot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        marginHorizontal: 3,
        backgroundColor: '#ccc',
      },
  });


var Slides = [
    {
        id: 1,
        img: require('../assets/carousel_1.png'),
        title: 'The fastest auto booking\napp is here!',
        description: 'Our speedy booking process means\nyou get a ride quickly and easily.'
    },
    {
        id: 2,
        img: require('../assets/carousel_2.png'),
        title: 'No more\nsurge pricing!',
        description: 'Experience fair and consistent fares,\neven during peak hours.'
    },
    {
        id: 3,
        img: require('../assets/carousel_3.png'),
        title: 'Be a part of the Open\nMobility Revolution!',
        description: 'Our data and product roadmap are\ntransparent for all.'
    }
];