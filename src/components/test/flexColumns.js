import React, { Component } from '../../../../../../../Users/sobers.bhaskaran/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import { AppRegistry, View } from 'react-native';

export default class FlexDimensionsBasics extends Component {
  render() {
    return (
      <View style={{flex: 1 }}>
        <View style={{flex: 1,  backgroundColor: 'powderblue'}} />
        <View style={{flex: 1, backgroundColor: 'skyblue'}} />
        <View style={{flex: 1, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}