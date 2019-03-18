import React from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";
import { styles } from "./Styles.js";

const Header = props => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>{props.text}</Text>
  </View>
);
Header.propTypes = {
  text: PropTypes.string
};
export default Header;
