import React, { Component } from "react";
import { View, TextInput, Button } from "react-native";
import { styles } from "../Styles/Styles.js";

export default class MyTextInput extends React.Component {
  constructor(props) {
    super();
    this.state = {
      keyText: "",
      valueText: "",
      isSubmitable: false
    };
  }
  handleChangeKey(key){
    this.setState({keyText: key},
    this.validateSubmit)
    //this.validateSubmit()
  }
  handleChangeValue(value){
    console.log(typeof this.validateSubmit)
    this.setState({valueText: value},
      this.validateSubmit
    )
    //this.validateSubmit()
  }
  validateSubmit(){
    console.log(this.state)
    if((this.state.keyText !== "") && (this.state.valueText != "")){
      this.setState({
        isSubmitable: true
      })
    } else {
      this.setState({
        isSubmitable: false
      })
    }
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
            onChangeText={(text) => this.handleChangeKey(text)}
            placeholder="enter a key"
          />
          <TextInput
            style={styles.text}
            value={this.state.valueText}
            onChangeText={(text) => this.handleChangeValue(text)}
            placeholder="enter a value"
          />
        </View>
        <Button title={"Add key-value pair"} onPress={() => this.sumbit()} disabled={!this.state.isSubmitable} />
      </View>
    );
  }
}
