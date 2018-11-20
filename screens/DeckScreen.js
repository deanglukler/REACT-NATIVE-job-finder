import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'

const mapState = ({ jobs }) => {
  return {
    jobs: jobs.results,
  }
}

const hoc = c => connect(mapState)(c)

export default hoc(class DeckScreen extends Component {
  render() {
    return (
      <View>
        <Text> Deck Screen </Text>
      </View>
    )
  }
})
