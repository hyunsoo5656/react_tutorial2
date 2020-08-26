import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Box extends Component {
  render() {
    return (
      //   <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      //     <View style={{ width: 50, height: 50, backgroundColor: "blue" }}></View>
      //     <View
      //       style={{ width: 100, height: 100, backgroundColor: "black" }}
      //     ></View>
      //     <View
      //       style={{ width: 150, height: 150, backgroundColor: "red" }}
      //     ></View>
      //   </View>
      <View style={{ flex: 1, width: "100%", flexDirection: "row" }}>
        <View style={{ flex: 1, backgroundColor: "red" }} />
        <View style={{ flex: 2, backgroundColor: "black" }} />
        <View style={{ flex: 3, backgroundColor: "blue" }} />
      </View>
    );
  }
}
