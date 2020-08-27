import React, { Component } from "react";

import { View, Text, Button } from "react-native";

export default class ButtonGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "김현수",
      count: 0,
    };
  }
  onPressButton1() {
    alert("버튼 클릭2");
  }
  alertStateName() {
    alert(this.state.name);
    this.addCount();
  }

  addCount() {
    const count = this.state.count + 1;
    this.setState({ count });
  }

  render() {
    return (
      <View>
        <Button onPress={() => alert("버튼 클릭1")} title="눌러주세요" />
        <Button onPress={this.onPressButton1} title="버튼2 클릭" />
        <Button onPress={this.alertStateName.bind(this)} title="이름 보기" />
        <Text>총 버튼이 {this.state.count}번 클릭 되었음</Text>
      </View>
    );
  }
}
