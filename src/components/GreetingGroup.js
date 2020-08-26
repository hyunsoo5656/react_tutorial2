import React, { Component } from "react";

import Greeting from "./Greeting";

import { View } from "react-native";

// export default class GreetingGroup extends Component {
//   render() {
//     const nameList = this.props.nameList;
//     return (
//       <View>
//         {nameList.map((name) => {
//           return <Greeting name={name} key={name} />;
//         })}

//         {/* 자식 컴포넌트에 props로 name을 전달 */}
//         {/* <Greeting name="김현수"></Greeting>
//         <Greeting name="신윤수"></Greeting>
//         <Greeting name="김현수"></Greeting>
//         <Greeting name="김철수"></Greeting> */}
//       </View>
//     );
//   }
// }

// // 방법 1
// export default class GreetingGroup extends Component {
//   render() {
//     return (
//       <View>
//         {/* 자식 컴포넌트에 props로 name을 전달 */}
//         <Greeting name="최예찬"></Greeting>
//         <Greeting name="신윤수"></Greeting>
//         <Greeting name="김현수"></Greeting>
//         <Greeting name="김철수"></Greeting>
//       </View>
//     );
//   }
// }

// 방법 2 (for문)
export default class GreetingGroup extends Component {
  render() {
    const nameList = this.props.nameList;
    return (
      <View>
        {nameList.map((name) => {
          return <Greeting name={name} key={name} />;
        })}
      </View>
    );
  }
}
