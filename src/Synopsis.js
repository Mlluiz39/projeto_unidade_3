import React from 'react'
import { SafeAreaView, View, Text, Image, StyleSheet } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

import { useRoute } from '@react-navigation/native'

export default function Synopsis() {
  const route = useRoute()

  const { data } = route.params

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: data.imagemUrl }} style={styles.image} />

      <View style={styles.data}>
        <View style={styles.viewValue}>
          <Ionicons name="heart" style={styles.icon} />
          <Text style={{ color: '#6D6171' }}>
            {data.genero} {' | '}
          </Text>
        </View>
        <View style={styles.viewValue}>
          <Ionicons name="time" style={styles.icon} />
          <Text style={{ color: '#6D6171' }}>
            {data.ano} {' | '}
          </Text>
        </View>
        <View style={styles.viewValue}>
          <Ionicons name="star" style={styles.icon} />
          <Text style={{ color: '#6D6171' }}>
            {data.nota} {''}
          </Text>
        </View>
      </View>
      <View style={styles.textSynopsis}>
        <Text style={{ color: '#ccc', fontSize: 16 }}>{data.sinopse}</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#343435',
  },
  image: {
    height: 250,
    aspectRatio: 1,
    borderRadius: 10,
    marginTop: 40,
    marginBottom: 20,
  },
  data: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewValue: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  icon: {
    color: '#6D6171',
    fontSize: 20,
  },
  textSynopsis: {
    width: '90%',
    marginTop: 30,
    color: '#ccc',
  },
})
