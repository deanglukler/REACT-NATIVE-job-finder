import React, { Component } from 'react'
import { Text, View } from 'react-native'

import Slides from '../components/Slides'

const SLIDES = [
  { text: 'Welcome to JobApp', color: '#03A9F4' },
  { text: 'Get a job you lib dweller', color: '#009688' },
  { text: 'Set your location, then swipe away', color: '#03A9F4' },
]

export default class WelcomeScreen extends Component {
  handleSlidesComplete = () => {
    this.props.navigation.navigate('auth')
  }

  render() {
    return <Slides data={SLIDES} onComplete={this.handleSlidesComplete} />
  }
}
