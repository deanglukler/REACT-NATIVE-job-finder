import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../actions'

const hoc = c => {
  return connect(null, actions)(c)
}

export default hoc(class AuthScreen extends Component {
  componentWillMount() {
    this.props.facebookLogin()
  }
  render() {
    return (
      <View>
        <Text> Auth Screen </Text>
      </View>
    )
  }
})
