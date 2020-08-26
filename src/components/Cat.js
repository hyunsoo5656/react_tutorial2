import React, { Component } from "react";

import { View, Image } from "react-native";

export default class Cat extends Component {
  render() {
    const imageSource = {
      uri: "https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg",
    };

    return (
      <View>
        <Image source={imageSource} style={{ width: 300, height: 300 }} />
      </View>
    );
  }
}
