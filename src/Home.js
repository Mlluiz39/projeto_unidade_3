import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'

import FlatComponent from './components/FlatComponent'
import data  from './data/data.json'

export default function Home() {

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <FlatComponent data={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
