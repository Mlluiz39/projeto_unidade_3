import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native'
import Carousel from 'react-native-snap-carousel'

import data from './data/data.json'
import FlatComponent from './components/FlatComponent'

export default function Home() {
  const [list, setList] = useState([...data])
  const [background, setBackground] = useState(list[0].imagemUrl)

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: background }}
        style={styles.imageBackground}
        resizeMode="cover"
        blurRadius={8}
      >
        <Carousel
          data={list}
          sliderWidth={500}
          itemWidth={250}
          onSnapToItem={index => {
            setBackground(list[index].imagemUrl)
          }}
          renderItem={({ item }) => <FlatComponent data={item} />}
        />
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    opacity: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  slideView: {
    width: '100%',
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
