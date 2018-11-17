import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class ReviewScreen extends Component {
  // When react navigation renders a component it will look at
  // the static 'navigationOptions' property on the class
  static navigationOptions = {
    title: 'Review Screen', // config the header title
    headerRight: <Text>Go Right</Text>, // displayed on right side
  }
  render() {
    return (
      <View>
        <Text> Review Screen </Text>
      </View>
    )
  }
}
