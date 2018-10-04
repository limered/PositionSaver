import React, { Component } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';

import { Button } from '../components/SimpleButton/index';
import positions from './../services/positionsRepo'

export default class SavePositionView extends Component{
    constructor(props){
        super(props);
        positions.load();
    }

    async savePressed(){
        await positions.savePosition(123, 123);
    }

    render(){
        return(
            <View style={styles.container}>
                <Button activate={this.savePressed.bind(this)}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#333',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignContent: 'stretch',
      alignItems:'center'
    }
  });