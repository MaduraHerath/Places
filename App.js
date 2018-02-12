/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Welcome from "./src/components/welcome/welcome";
import { StackNavigator } from 'react-navigation';
import Home from "./src/components/home/home";




export default class App extends React.Component {

    render() {
        return (
            <StackView />
        );
    }
}

const StackView = StackNavigator(  {
        Welcome: {
            screen: Welcome,
            navigationOptions: {
                header: null
            },
        },
        Home: {
            screen: Home,
            navigationOptions: {
                header: null
            }
        },
    },
    {
        initialRouteName: 'Welcome',
    }

);
