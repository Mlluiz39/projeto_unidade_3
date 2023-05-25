import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './src/Home'
import Synopsis from './src/Synopsis'

const { Navigator, Screen } = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Home"
          options={{ headerTitle: 'Lista de filmes' }}
          component={Home}
        />
        <Screen
          name="Synopsis"
          options={{ headerTitle: 'Descrição' }}
          component={Synopsis}
        />
      </Navigator>
    </NavigationContainer>
  )
}