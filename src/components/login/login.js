import React, { Component } from 'react';
import {Alert} from 'react-native';
import { View, Text } from 'react-native';
import styles from './styles/loginStyles';

import Wallpaper from '../wallpaper';
import Logo from './logo';
import Form from './Form';
import SignupSection from './SignupSection';
import ButtonSubmit from './ButtonSubmit';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        }
    }

    onChangeUsername = (val) => {
        //Alert.alert('Username: ' + val);
        this.setState({
            username: val
        })
    };

    onChangePassword = (val) => {
        //Alert.alert('Password: ' + val);
        this.setState({
            password: val
        })
    };

    render() {
        return (
            <Wallpaper>
                <Logo />
                <Form onChangeUsername={this.onChangeUsername} onChangePassword={this.onChangePassword}  />
                <SignupSection />
                <ButtonSubmit username={this.state.username} password={this.state.password} />
            </Wallpaper>
        )
    }
}

export default Login;