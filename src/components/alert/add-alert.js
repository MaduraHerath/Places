import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,


} from 'react-native';

import { Container, Header, Content, Form, Item, Input, Label,Button,Text } from 'native-base';
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class AddAlert extends React.Component {

    render() {
        return (
            <Content>
                <Form style={styles.container}>
                    <Item floatingLabel>
                        <Label>Alert Title</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel last>
                        <Label>Description</Label>
                        <Input />
                    </Item>
                    <Button block style={styles.welcome}>
                        <Text>Add</Text>
                    </Button>
                </Form>
            </Content>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FAFAFA',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#2196F3',
    },
    instructions: {
        textAlign: 'center',
        color: '#2196F3',
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



