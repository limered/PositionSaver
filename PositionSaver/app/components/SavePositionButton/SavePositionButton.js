import React,{Component} from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './SavePositionStyle';

export default class SavePositionButton extends Component{
    render(){
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={this.props.activate} style={styles.buttonContainer}>
                <View style={styles.buttonView}>
                    <Text>Start</Text>
                </View>
            </TouchableOpacity>
        )
    }
}
