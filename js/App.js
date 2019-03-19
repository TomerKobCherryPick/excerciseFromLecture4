import React, { Component } from "react";
import { View } from "react-native";
import CustomSectionList from "./Components/CustomSectionList.js";
import { styles } from "./Styles/Styles.js";

const exampleDate = {
  Number: 42,
  Carbs: ["potato", "bread", "pita", "pizza"]
};

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CustomSectionList object={exampleDate} />
      </View>
    );
  }
}
