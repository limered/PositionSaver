import React,{Component} from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export default class Button extends Component{
    render(){
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={this.props.activate} style={styles.button}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Save</Text>
                </View>
            </TouchableOpacity> 
        )
    }
}
