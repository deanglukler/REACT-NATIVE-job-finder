import React, { Component } from 'react'
import { Text, View } from 'react-native'

import Slides from '../components/Slides'

const SLIDES = [
  { text: 'Welcome to JobApp' },
  { text: 'Set your location, then swipe away' },
]

export default class WelcomeScreen extends Component {
  render() {
    return <Slides data={SLIDES} />
  }
}
