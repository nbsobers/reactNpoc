import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Login from './login/login';
import Home from './Home';
import Map from './Map';

export default class Main extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="loginScreen"
                        component={Login}
                        animation='fade'
                        hideNavBar={true}
                        initial={true}
                    />
                    <Scene key="homeScreen"
                        component={Home}
                        animation='fade'
                        hideNavBar={false}                       
                    />

                    <Scene key="mapScreen"
                        component={Map}
                        animation='fade'
                        hideNavBar={false}
                       
                    />
                </Scene>
            </Router>
        );
    }
}