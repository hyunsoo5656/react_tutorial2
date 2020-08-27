import React, { Component } from "react";

import { View, Text, FlatList } from "react-native";

export default class FlatListBasics extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={{ flex: 1, paddingTop: 52, width: "100%" }}>
          <FlatList
            data={[{ key: "영수" }, { key: "윤수" }, { key: "소희" }]}
            renderItem={({ item }) => {
              return (
                <Text
                  style={{
                    padding: 10,
                    fontSize: 18,
                    height: 44,
                    borderWidth: 1,
                    width: "80%",
                  }}
                >
                  {item.key}
                </Text>
              );
            }}
          />
        </View>
      </TouchableOpacity>
    );
  }
}
