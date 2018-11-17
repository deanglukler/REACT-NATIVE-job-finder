import React, { PureComponent } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation'

import AuthScreen from './screens/AuthScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import MapScreen from './screens/MapScreen'
import DeckScreen from './screens/DeckScreen'
import SettingsScreen from './screens/SettingsScreen'
import ReviewScreen from './screens/ReviewScreen'
const MainNavigator = createBottomTabNavigator({
  Welcome: { screen: WelcomeScreen },
  Auth: { screen: AuthScreen },
  main: {
    screen: createBottomTabNavigator({
      map: { screen: MapScreen },
      deck: { screen: DeckScreen },
      review: {
        screen: createStackNavigator({
          settings: { screen: SettingsScreen },
          review: { screen: ReviewScreen },
        }),
      },
    }),
  },
})

export default class App extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
