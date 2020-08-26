import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import HelloWorld from "./components/HelloWorld";

import Blink from "./components/Blink";

import GreetingGroup from "./components/GreetingGroup";
import StyleApp from "./components/StyleApp";

import Box from "./components/Box";

export default function Root(props) {
  return (
    <View style={styles.container}>
      {/* <GreetingGroup>
        nameList={["신윤수", "김철수", "고원희", "김현수"]}
      </GreetingGroup> */}
      {/* <Blink innerText="깜빡입니다." /> */}
      {/* <StyleApp /> */}

      <Box />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
