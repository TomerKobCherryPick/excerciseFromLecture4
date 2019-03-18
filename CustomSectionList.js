import React from "react";
import { SectionList, Text, View } from "react-native";
import PropTypes from "prop-types";
import Row from "./Row.js";
import Header from "./Header.js";
import MyTextInput from "./MyTextInput.js";
import {styles} from "./Styles.js"


const renderItem = ({ item, index }) => <Row objectValue={item.value} />;
const renderSectionHeader = obj => <Header text={obj.section.title} />;

const returnKeyValuePair = (key, value) => {
  if (Array.isArray(value)) {
    let index = 0;
    return value.map(value => ({ key: key + index++, value }));
  } else {
    return [{ key: key, value: value }];
  }
};

export default class CustomSectionList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      object: props.object
    };
  }
  addPairAction(pair) {
    this.setState(prevState => {
      if (prevState.object[pair.key] instanceof Array) {
        return {
          object: { ...prevState.object, [pair.key]: [pair.value, ...prevState.object[pair.key]] }
        };
      }
      return { object: { ...prevState.object, [pair.key]: pair.value } };
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <MyTextInput addPairAction={(key,value) => this.addPairAction(key,value)} />
        <SectionList
          style={styles.sectionList}
          sections={Object.keys(this.state.object).map(key => ({
            title: key,
            data: returnKeyValuePair(key, this.state.object[key])
          }))}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
        />
      </View>
    );
  }
}
CustomSectionList.propTypes = {
  object: PropTypes.object
};
