import React, { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import HelloWorld from "./components/HelloWorld";

import Blink from "./components/Blink";

import GreetingGroup from "./components/GreetingGroup";
import StyleApp from "./components/StyleApp";

import Box from "./components/Box";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import Box2 from "./components/Box2";
import BaseTextInput from "./components/BaseTextInput";
import ButtonGroup from "./components/ButtonGroup";

import ButtonsTouchable from "./components/ButtonsTouchable";
import FlatListBasics from "./components/FlatListBasics";
import TelBook from "./components/TelBook";
import TelBook_search from "./components/TelBook_search";

import SectionListBasics from "./components/SectionListBasics";

export default function Root(props) {
  return (
    <View style={styles.container}>
      {/* <GreetingGroup>
        nameList={["신윤수", "김철수", "고원희", "김현수"]}
      </GreetingGroup> */}
      {/* <Blink innerText="깜빡입니다." /> */}
      {/* <StyleApp /> */}
      {/* <Box></Box> */}
      {/* <Box /> */}
      {/* <Greeting></Greeting> */}

      {/* <Box2 title="상품 목록">
        <View>
          <Image
            source={require("../assets/splash.png")}
            style={{ width: 200, height: 200 }}
          />
          <Text>내용</Text>
        </View>
      </Box2> */}

      {/* <Header text="제목"></Header> */}

      {/* <Header style={{ color: "blue" }}>제목</Header> */}

      {/* <BaseTextInput></BaseTextInput> */}

      {/* <ButtonsTouchable
        title="버튼1"
        onPress={() => alert("버튼1클릭")}
      ></ButtonsTouchable>
      <ButtonsTouchable
        title="버튼1"
        onPress={() => alert("버튼2클릭")}
      ></ButtonsTouchable> */}
      {/* <FlatListBasics></FlatListBasics> */}
      {/* <FlatListBasics>onPress={() => alert("010-3899-1374")}</FlatListBasics>
      <FlatListBasics>onPress={() => alert("011-1234-5555")}</FlatListBasics>
      <FlatListBasics>onPress={() => alert("012-9999-5555")}</FlatListBasics> */}

      {/* <TelBook_search></TelBook_search> */}

      <SectionListBasics></SectionListBasics>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
