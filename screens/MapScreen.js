import React, { Component } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { MapView } from "expo";

export default class MapScreen extends Component {
  state = {
    // mapLoaded is a work around for android systems that don't render correctly on load
    mapLoaded: false,
    region: {
      longitude: -122,
      latitude: 37,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09
    }
  };

  componentDidMount() {
    this.setState({
      mapLoaded: true,
    })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state.mapLoaded ? (
          <MapView region={this.state.region} style={{ flex: 1 }} />
        ) : <ActivityIndicator size="large" />}
      </View>
    );
  }
}
