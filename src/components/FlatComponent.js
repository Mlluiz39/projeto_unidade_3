import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function FlatComponent({ data }) {

  const navigation = useNavigation()

  function handleNavigateToSynopsis() {
    navigation.navigate('Synopsis', { data })
  }


  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigateToSynopsis}>
      <Image
        resizeMode="contain"
        source={{ uri: data.imagemUrl }}
        style={{ width: 100, height: 100 }}
      />
      <View style={styles.subContainer}>
        <View style={styles.title}>
          <Text style={styles.name}>{data.nome}</Text>
        </View>
        <Text style={styles.titleDescription}>Genero: {data.genero}</Text>
        <Text style={styles.titleDescription}>Ano lançamento: {data.ano}</Text>
        <Text style={styles.titleDescription}>Nota do filme: {data.nota}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#E0EDEE',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    margin: 8,
  },
  subContainer: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 200,
    marginBottom: 8,
  },
  name: {
    color: 'navy',
    fontSize: 18,
   
  },
  titleDescription: {
    fontSize: 16,
    fontWeight: '600',
    color: '#001F54',
  },
})
