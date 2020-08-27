import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header(props) {
  return <Text style={styles.headerText}>{props.text}</Text>;
  // return <Text style={(styles.headerText, props.style)}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
