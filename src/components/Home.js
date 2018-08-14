import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';

export default class FlexDimensionsBasics extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'steelblue' }}>
        <Text>Home</Text>        
        />
      </View>
    );
  }
}