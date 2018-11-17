import React, { Component } from 'react'
import { Text, View, ScrollView, Dimensions } from 'react-native'
import { Button } from 'react-native-elements'

const DEVICE_WIDTH = Dimensions.get('window').width

export default class Slides extends Component {
  static defaultProps = {
    data: [],
    onComplete: () => {},
  }

  renderSlides() {
    return this.props.data.map((slide, index, { length }) => (
      <View
        key={slide.text}
        style={[styles.wrapStyles, { backgroundColor: slide.color }]}
      >
        <View style={styles.slideStyles}>
          <Text style={styles.textStyles}>{slide.text}</Text>
          {index === length - 1 && (
            <Button
              buttonStyle={styles.buttonStyles}
              textStyle={styles.textStyles}
              onPress={this.props.onComplete}
              title="onwards"
              raised
            />
          )}
        </View>
      </View>
    ))
  }

  render() {
    return (
      <ScrollView pagingEnabled horizontal style={{ flex: 1 }}>
        {this.renderSlides()}
      </ScrollView>
    )
  }
}

const styles = {
  wrapStyles: {
    width: DEVICE_WIDTH,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyles: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
  },
  slideStyles: {
    flexBasis: '85%',
    maxWidth: 350,
  },
  buttonStyles: {
    backgroundColor: '#0288D1',
    marginTop: 15,
  },
}
