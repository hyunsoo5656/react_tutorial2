import React, { Component } from "react";
// import React from "./node_modules/react";
import { Text, View, StyleSheet, TextInput } from "react-native";

export default class BaseTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  //28 이랑 같이쓴다.
  onChangeTextAction(text) {
    this.setState({ text });
  }

  render() {
    return (
      <View style={{ padding: 10, width: "80%" }}>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            width: "100%",
          }}
          placeholder="입력해주세요."
          //   onChangeText={(text) => this.setState({ text })}
          // 함수로 받아줘야한다. onChangeTextAction(text) == xxx 함수호출은 xxx
          onChangeText={this.onChangeTextAction.bind(this)}
          value={this.state.text}
        />
        <Text style={{ padding: 10, fontSize: 22, width: "100%" }}>
          입력된 글 : {this.state.text}
        </Text>
      </View>
    );
  }
}
