import React, { Component } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { MapView } from "expo";
import { connect } from "react-redux";
import { Button, Icon } from "react-native-elements";

import * as actions from "../actions";

const hoc = c =>
  connect(
    null,
    actions
  )(c);

export default hoc(
  class MapScreen extends Component {
    static navigationOptions = () => ({
      title: 'Map',
      // tabBarIcon gives up nice props to help display tings, like tint color (which is blue in IOS)
      tabBarIcon: ({ tintColor }) => <Icon name="my-location" size={30} color={tintColor}/>,
    })
    
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
        mapLoaded: true
      });
    }

    onRegionChangeComplete = region => {
      this.setState({ region });
    };

    onSearchArea = () => {
      this.props.fetchJobs(this.state.region, () => {
        // after we fetch jobs.. we'd lie to show available jobs in the deck component
        this.props.navigation.navigate('deck')
      })
    }

    render() {
      return (
        <View style={{ flex: 1 }}>
          {this.state.mapLoaded ? (
            <MapView
              onRegionChangeComplete={this.onRegionChangeComplete}
              region={this.state.region}
              style={{ flex: 1 }}
            />
          ) : (
            <ActivityIndicator size="large" />
          )}
          <View>
            <Button
              title="Search Area"
              large
              backgroundColor="#009688"
              icon={{ name: "search" }}
              style={styles.buttonWrap}
              onPress={this.onSearchArea}
            />
          </View>
        </View>
      );
    }
  }
);

const styles = {
  buttonWrap: {
    position: "absolute",
    bottom: 20
  }
};
