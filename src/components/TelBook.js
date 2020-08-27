import React from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import Hangul, { disassemble } from "hangul-js";

function TelBookItem(props) {
  const { item } = props;
  return (
    <TouchableOpacity
      style={{
        width: "100%",
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#e9e9e9",
      }}
      onPress={() => {
        alert(`${item.tel}로 전화연결`);
      }}
    >
      <Text style={{ flex: 1, padding: 5, paddingLeft: 10 }}>{item.name}</Text>
      <Text style={{ flex: 1 }}>{item.tel}</Text>
    </TouchableOpacity>
  );
}

export default class TelBook extends React.Component {
  render() {
    const data = [
      {
        key: "1",
        name: "김철수",
        tel: "010-1111-1111",
      },
      {
        key: "2",
        name: "고영희",
        tel: "010-2222-2222",
      },
      {
        key: "3",
        name: "박말숙",
        tel: "010-3333-3333",
      },
      {
        key: "4",
        name: "곽도팔",
        tel: "010-4444-4444",
      },
    ];
    // console.log(disassemble(data[0].name, true));
    const newData = data.map((item) => {
      const name = item.name;
      const daName = disassemble(name, true);
      const chosungArr = daName.map((c) => {
        return c[0];
      });
      const chosung = chosungArr.join("");

      return {
        ...item,
        chosung: chosung,
      };
    });
    // console.log(newData);

    return (
      <View
        style={{
          marginTop: 40,
          width: "100%",
          flex: 1,
          justifyContent: "flex-start",
        }}
      >
        <FlatList
          data={newData}
          renderItem={({ item }) => {
            return <TelBookItem item={item}></TelBookItem>;
          }}
        ></FlatList>
      </View>
    );
  }
}
