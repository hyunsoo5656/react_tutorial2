import React from "react";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";

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

export default class TelBook_search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  //28 이랑 같이쓴다.
  onChangeTextAction(text) {
    this.setState({ text });
  }

  render() {
    const data = [
      {
        key: "1",
        name: "김철수",
        tel: "010-1111-1111",
      },
      {
        key: "2",
        name: "김영희",
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
    return (
      <View
        style={{
          marginTop: 40,
          width: "100%",
          flex: 1,
          justifyContent: "flex-start",
        }}
      >
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

        <FlatList
          data={data}
          renderItem={({ item }) => {
            if (this.state.text === "") {
              return <TelBookItem item={item}></TelBookItem>;
            }
            // if (this.state.text === item.name) {
            if (item.name.includes(this.state.text)) {
              return <TelBookItem item={item}></TelBookItem>;
            }
          }}
        ></FlatList>
      </View>
    );
  }
}
