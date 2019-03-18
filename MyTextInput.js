import React, { Component } from "react";
import { View, TextInput, Button } from "react-native";
import { styles } from "./Styles.js";

export default class MyTextInput extends React.Component {
  constructor(props) {
    super();
    this.state = {
      keyText: "enter a key",
      valueText: "enter a value",
      addPairAction: props.addPairAction
    };
  }
  sumbit() {
    if (
      this.state.keyText != "" &&
      this.state.keyText !== "enter a key" &&
      this.state.valueText != "" &&
      this.state.valueText !== "enter a value"
    ) {
      const newKeyValuePair = `{Key: ${this.state.keyText} + ", value:" ${
        this.state.valueText
      }}`;
      let parsedPair;
      try {
        parsedPair = JSON.parse(newKeyValuePair);
      } catch (err) {
        parsedPair = { key: this.state.keyText, value: this.state.valueText };
      }
      this.state.addPairAction(parsedPair);
      this.setState({
        keyText: "enter a key",
        valueText: "enter a value"
      });
    }
  }
  render() {
    return (
      <View style={styles.buttonAndTextContainer}>
        <View style={styles.textContainer}>
          <TextInput
            style={styles.text}
            value={this.state.keyText}
            onChangeText={text => this.setState({ keyText: text })}
          />
          <TextInput
            style={styles.text}
            value={this.state.valueText}
            onChangeText={text => this.setState({ valueText: text })}
          />
        </View>
        <Button title={"Add key-value pair"} onPress={() => this.sumbit()} />
      </View>
    );
  }
}
