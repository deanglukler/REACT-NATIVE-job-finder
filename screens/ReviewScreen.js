import React, { Component } from "react";
// use Linking to provide access to other apps
import { Text, View, ScrollView, Linking, Platform } from "react-native";
import { connect } from "react-redux";
import { MapView } from "expo";

import { Button, Card, Icon } from "react-native-elements";

const mapState = state => {
  return {
    likedJobs: state.likedJobs
  };
};

const hoc = c => connect(mapState)(c);

export default hoc(
  class ReviewScreen extends Component {
    // use a funtion to interact with site navition
    static navigationOptions = ({ navigation }) => ({
      headerRight: (
        <Button
          title="Settings"
          onPress={() => navigation.navigate("settings")}
          backgroundColor="rgba(0, 0, 0, 0)"
          color="rgba(0, 122, 255, 1)"
        />
      )
    })

    renderLikedJobs() {
      return this.props.likedJobs.map(job => {
        const {
          jobkey,
          jobtitle,
          company,
          formattedRelativeTime,
          url,
          longitude,
          latitude
        } = job;
        const initialRegion = {
          latitude,
          longitude,
          latitudeDelta: 0.045,
          longitudeDelta: 0.02
        };
        return (
          <Card title={jobtitle} key={jobkey}>
            <View style={{ height: 200 }}>
              <MapView
                style={{ flex: 1 }}
                cacheEnabled={Platform.OS === "android"}
                scrollEnabled={false}
                initialRegion={initialRegion}
              />
              <View style={styles.detailWrapper}>
                <Text>{company}</Text>
                <Text>{formattedRelativeTime}</Text>
              </View>
              <Button
                title="Apply!"
                backgroundColor="#03A9F4"
                onPress={() => {
                  Linking.openURL(url);
                }}
              />
            </View>
          </Card>
        );
      });
    }

    render() {
      return <ScrollView>{this.renderLikedJobs()}</ScrollView>;
    }
  }
);

const styles = {
  detailWrapper: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-around"
  }
};
