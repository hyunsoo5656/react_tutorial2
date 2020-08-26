import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Root from "./src/Root";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Root></Root>
      <StatusBar style="auto" />
    </View>
  );
}
