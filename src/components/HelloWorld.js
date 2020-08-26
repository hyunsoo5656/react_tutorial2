import React from "react";
// import React from "./node_modules/react";
import { Text, View, StyleSheet } from "react-native";
export default class HelloWorld extends React.Component {
  render() {
    return (
      <View style={styles.textWrap}>
        <Text style={styles.textStyle}>Hello World</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textWrap: {
    backgroundColor: "green",
  },
  textStyle: {
    color: "red",
    fontSize: 40,
    fontStyle: "italic",
  },
});

// import React from "react";
// import { Text, View } from "react-native";
// export default class HelloWorld extends React.Component {
//   render() {
//     return (
//       <View style={{ backgroundColor: "green" }}>
//         <Text style={{ color: "red", fontSize: 40, fontStyle: "italic" }}>
//           Hello World
//         </Text>
//       </View>
//     );
//   }
// }
