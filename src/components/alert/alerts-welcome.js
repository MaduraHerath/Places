import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    Image,

} from 'react-native';
import {StackNavigator} from "react-navigation";
import Alert from "./alert";
import AddAlert from "./add-alert";


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class AlertsWelcome extends React.Component {

    render() {
        return (
           <StackView></StackView>
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

