// import React from "react";
// import {
//   View,
//   FlatList,
//   Text,
//   TouchableOpacity,
//   TextInput,
//   SectionList,
//   StyleSheet,
// } from "react-native";

// export default class SectionListBasics extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <SectionList
//           sections={[
//             { title: "D", data: ["Devin", "Den", "Dominic"] },
//             {
//               title: "J",
//               data: [
//                 "Jackson",
//                 "James",
//                 "Jillian",
//                 "Jimmy",
//                 "Joel",
//                 "John",
//                 "Julie",
//               ],
//             },
//           ]}
//           renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
//           renderSectionHeader={({ section }) => (
//             <Text style={styles.sectionHeader}>{section.title}</Text>
//           )}
//           keyExtractor={(item, index) => index}
//         />
//       </View>
//     );
//   }
// }

import React, { Component } from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";

export default class SectionListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            { title: "D", data: ["Devin", "Dan", "Dominic"] },
            {
              title: "J",
              data: [
                "Jackson",
                "James",
                "Jillian",
                "Jimmy",
                "Joel",
                "John",
                "Julie",
              ],
            },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    width: "100%",
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "rgba(247,247,247,1.0)",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
