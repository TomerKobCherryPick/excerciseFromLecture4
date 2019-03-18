import React, {Component} from 'react';
import {Text, View} from 'react-native'
import PropTypes from 'prop-types'
import {styles} from "./Styles.js"

const Row = props => (
  <View style={styles.row} >
    <Text>{props.objectValue}</Text>
  </View>
)
Row.propTypes = {
  objectValue: PropTypes.any
}

export default Row
