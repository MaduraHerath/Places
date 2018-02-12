import React, { Component } from 'react';
import { Container, Header, Item, Input  , Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import Search from "../search/search";
import {TabNavigator,TabBarBottom} from "react-navigation";
import AlertsWelcome from "../alert/alerts-welcome";

export default class Home extends Component {
    render() {
        return (
           <Tabs></Tabs>
        );
    }
}

export const Tabs = TabNavigator(
    {
    Search: {
        screen: Search,
        navigationOptions: {
            tabBarLabel: 'Instructions',
            tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
        },
    },
    AlertsWelcome: {
        screen: AlertsWelcome,
        navigationOptions: {

            tabBarLabel: 'Alerts',
            tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
        },
    },


});