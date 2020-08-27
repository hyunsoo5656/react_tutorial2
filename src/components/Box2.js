import React from "react";

import { View, Text } from "react-native";

export default class Box2 extends React.Component {
  render() {
    return (
      <View style="width : 100%">
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          {this.props.title}
        </Text>

        <View>{this.props.children}</View>
      </View>
    );
  }
}
