import React, { Component } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import bgImage from '../images/wallpaper.png';

export default class Wallpaper extends Component {
   
    render(){
        return (
            <ImageBackground style={styles.picture} source={bgImage}>
                {this.props.children}
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    picture: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'cover',
    },
  });

 