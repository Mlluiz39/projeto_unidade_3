import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import { useRoute } from '@react-navigation/native'

export default function Synopsis() {
  const route = useRoute()

  const { data } = route.params

  return (
    <View style={styles.container}>
      <Image source={{ uri: data.imagemUrl }} style={styles.image} />
      <View style={styles.subContainer}>
        <Text style={{ fontSize: 16 }}>
          Nome: <Text style={styles.TitleDescription}>{data.nome}</Text>
        </Text>
        <Text style={{ fontSize: 16 }}>
          Genero: <Text style={styles.TitleDescription}>{data.genero}</Text>
        </Text>
        <Text style={{ fontSize: 16 }}>
          Ano lançamento:{' '}
          <Text style={styles.TitleDescription}>{data.ano}</Text>
        </Text>
        <Text style={{ fontSize: 16 }}>
          Nota do filme:{' '}
          <Text style={styles.TitleDescription}>{data.nota}</Text>
        </Text>
        <Text style={{ fontSize: 16 }}>
          Sinopse: {'\n'}
          <Text style={styles.TitleDescription}>{data.sinopse}</Text>
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#E0EDEE',
    
  },
  image: {
    aspectRatio: 1,
    resizeMode: 'contain',
    marginTop: 10,
    marginBottom: 20,
  },
  subContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 25,
    margin: 8,
    flexDirection: 'column',
    alignItems: 'center',
  },
  TitleDescription: {
    color: 'navy',
    fontSize: 14,
    fontWeight: 'bold',
  },
})
