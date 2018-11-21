import React, { Component } from "react";
import { Text, View, Platform } from "react-native";
import { connect } from "react-redux";
import { MapView } from "expo";
import { Card, Button } from "react-native-elements";

import Swipe from "../components/Swipe";
import * as actions from "../actions";

const mapState = ({ jobs }) => {
  return {
    jobs: jobs.results
  };
};

const hoc = c =>
  connect(
    mapState,
    actions
  )(c);

export default hoc(
  class DeckScreen extends Component {
    renderCard(job) {
      const initialRegion = {
        longitude: job.longitude,
        latitude: job.latitude,
        latitudeDelta: 0.045,
        longitudeDelta: 0.02
      };

      return (
        <Card title={job.jobtitle}>
          <View style={{ height: 300 }}>
            <MapView
              scrollEnabled={false}
              style={{ flex: 1 }}
              initialRegion={initialRegion}
              // cache enabled will display map as an image which could help performance
              // it also helps android not glitch out so much when displaying multiple maps
              cacheEnabled={Platform.OS === "android" ? true : false}
            />
          </View>
          <View style={styles.detailWrapper}>
            <Text>{job.company}</Text>
            <Text>{job.formattedRelativeTime}</Text>
          </View>
          <Text>{job.snippet.replace(/[<b>|</b>]/g, "")}</Text>
        </Card>
      );
    }

    renderNoMoreCards = () => {
      return (
        <Card title="No More Jobs">
          <Button
            title="Back to Map"
            large
            icon={{ name: "my-location" }}
            backgroundColor="#03a9f4"
            onPress={() => {
              this.props.navigation.navigate("map");
            }}
          />
        </Card>
      );
    }

    render() {
      return (
        <View style={{ marginTop: 40 }}>
          <Swipe
            useKeyPropName="jobkey"
            data={this.props.jobs}
            renderCard={this.renderCard}
            renderNoMoreCards={this.renderNoMoreCards}
            onSwipeRight={job => {
              this.props.likeJob(job);
            }}
          />
        </View>
      );
    }
  }
);

const styles = {
  detailWrapper: {
    flexDirection: "row",
    justifyContent: "space-around"
  }
};
