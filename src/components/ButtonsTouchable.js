import React from "react";

import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default class ButtonsTouchable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={styles.buttonWrap}>
          <Text style={styles.buttonText}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  buttonWrap: {
    backgroundColor: "tomato",
    padding: 7,
    borderRadius: 6,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
});
