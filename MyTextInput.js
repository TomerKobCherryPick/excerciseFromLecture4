import React, { Component } from "react";
import { View, TextInput, Button } from "react-native";
import { styles } from "./Styles.js";

export default class MyTextInput extends React.Component {
  constructor(props) {
    super();
    this.state = {
      keyText: "",
      valueText: "",
    };
  }
  sumbit() {
    if (this.state.keyText != "" && this.state.valueText != "") {
      let parsedPair;
      try {
        parsedPair = JSON.parse(
          `{"key":"${this.state.keyText}", "value":${this.state.valueText}}`
        );
      } catch (err) {
        parsedPair = { key: this.state.keyText, value: this.state.valueText };
      }
      this.props.addPairAction(parsedPair);
      this.setState({
        keyText: "",
        valueText: ""
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
            placeholder="enter a key"
          />
          <TextInput
            style={styles.text}
            value={this.state.valueText}
            onChangeText={text => this.setState({ valueText: text })}
            placeholder="enter a value"
          />
        </View>
        <Button title={"Add key-value pair"} onPress={() => this.sumbit()} />
      </View>
    );
  }
}
