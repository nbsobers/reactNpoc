import React, { Component } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

import logoImage from '../../images/logo.png';

export default class Logo extends Component {
   
    render(){
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={logoImage} />
                <Text style={styles.text}>Login to My App</Text>
            </View>            
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 80,
        height: 80,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        marginTop: 20,
    },
  });

 