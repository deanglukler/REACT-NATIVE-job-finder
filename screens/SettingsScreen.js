import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from 'react-redux'
import { Button } from 'react-native-elements'

import { clearLikedJobs } from "../actions";

const hoc = c =>
  connect(
    null,
    { clearLikedJobs }
  )(c);

export default hoc(class SettingsScreen extends Component {
  render() {
    return (
      <View>
        <Button
          title="Reset Liked Jobs"
          large
          icon={{ name: "delete-forever" }}
          backgroundColor="#f44336"
          onPress={this.props.clearLikedJobs}
        />
      </View>
    );
  }
})
