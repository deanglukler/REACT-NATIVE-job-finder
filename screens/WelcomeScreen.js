import React, { Component } from 'react'
import { Text, View, AsyncStorage } from 'react-native'
import { AppLoading } from 'expo'
import _ from 'lodash'

import Slides from '../components/Slides'

const SLIDES = [
  { text: 'Welcome to JobApp', color: '#03A9F4' },
  { text: 'Get a job you lib dweller', color: '#009688' },
  { text: 'Set your location, then swipe away', color: '#03A9F4' },
]

export default class WelcomeScreen extends Component {
  state = {
    token: null,
  }

  async componentDidMount() {
    let token = await AsyncStorage.getItem('fb_token')

    if (token) {
      this.setState({ token: true })
      this.props.navigation.navigate('map')
    } else {
      this.setState({ token: false })
    }
  }

  handleSlidesComplete = () => {
    this.props.navigation.navigate('auth')
  }

  render() {
    if (_.isNull(this.state.token)) {
      return <AppLoading />
    }

    return <Slides data={SLIDES} onComplete={this.handleSlidesComplete} />
  }
}
