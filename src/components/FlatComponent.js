import React from 'react'
import { Text, Image, TouchableOpacity, StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function FlatComponent({ data }) {
  const navigation = useNavigation()

  function handleNavigateToSynopsis() {
    navigation.navigate('Synopsis', { data })
  }

  return (
    <View style={styles.contains}>
      <TouchableOpacity
        style={styles.container}
        onPress={handleNavigateToSynopsis}
      >
        <Image
          resizeMode="contain"
          source={{ uri: data.imagemUrl }}
          style={{ width: 300, height: 350 }}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{data.nome}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contains: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    margin: 10,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
})
