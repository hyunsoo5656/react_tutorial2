import React from "react";
import { View, Text } from "react-native";

export default class Blink extends React.Component {
  //생성자
  constructor(props) {
    super(props);

    this.state = {
      //초기상태 기본값설정
      visible: true,
    };

    //밑에꺼랑 같음
    // setInterval(() => {
    //   this.setState({ visible: !this.state.visible });
    // }, 2000);

    setInterval(
      function () {
        this.setState({ visible: !this.state.visible });
      }.bind(this),
      2000
    );
  }

  render() {
    const { innerText } = this.props;
    return (
      <View>
        <Text>{this.state.visible ? innerText : ""}</Text>
      </View>
    );
  }
}
