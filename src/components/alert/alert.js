import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    Image,

} from 'react-native';
import AddAlert from "./add-alert";
import { StackNavigator } from 'react-navigation';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class Alert extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../images/alarm.png')} />
                <Text style={styles.welcome}>
                   No Alterts Found
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit App.js
                </Text>
                <Text style={styles.instructions}>
                    {instructions}
                </Text>
                <Button style={styles.signup}
                        title="Add Alert"
                        onPress={() => this.props.navigation.navigate('AddAlert')}
                />
            </View>
        );
    }
}
const StackView = StackNavigator(  {
        Alert: {
            screen: Alert,
            navigationOptions: {
                header: null
            },
        },
        AddAlert: {
            screen: AddAlert,
            navigationOptions: {
                header: null
            }
        },
    },
    {
        initialRouteName: 'Alert',
    });
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2196F3',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#FAFAFA',
    },
    instructions: {
        textAlign: 'center',
        color: '#FAFAFA',
        marginBottom: 10,
    },
    signup: {
        marginTop:20,
        paddingTop:20,
        borderRadius:30,
        backgroundColor:'#FAFAFA',
        color:'#2196F3'


    }
});

