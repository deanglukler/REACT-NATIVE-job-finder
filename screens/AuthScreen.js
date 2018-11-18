import React, { Component } from 'react'
import { Text, View, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../actions'

const hoc = c => connect(s => ({ token: s.auth.token }), actions)(c)

export default hoc(class AuthScreen extends Component {
  componentWillMount() {
    // to clear storage for testing
    // AsyncStorage.clear() 
    
    this.props.facebookLogin()
    // this isn't really necessary (maybe) because we are also checking in componentWillReceive
    this.onAuthComplete(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps)
  }

  onAuthComplete(props) {
    if (props.token) {
      this.props.navigation.navigate('map')
    }
  }
  
  render() {
    return (
      <View>
        <Text> Auth Screen </Text>
      </View>
    )
  }
})
