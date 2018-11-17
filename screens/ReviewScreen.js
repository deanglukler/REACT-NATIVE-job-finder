import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { Button } from 'react-native-elements'

export default class ReviewScreen extends Component {
  // use a funtion to interact with site navition
  static navigationOptions = ({ navigation }) => ({
    title: 'Review Screen', // config the header title
    headerRight: (
      <Button
        title="Settings"
        onPress={() => navigation.navigate('settings')}
      />
    ),
  })

  render() {
    return (
      <View>
        <Text> Review Screen </Text>
      </View>
    )
  }
}
