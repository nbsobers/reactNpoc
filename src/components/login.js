import React, { Component } from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/loginStyles';

class Login extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <View style={styles.container}>
               <Text style={styles.text}> POC </Text>
            </View>
        )
    }
}

export default Login;