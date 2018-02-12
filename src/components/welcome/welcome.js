import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    Image,

} from 'react-native';


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class Welcome extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../images/buslogo.png')} />
                <Text style={styles.welcome}>
                    Welcome to Bus Tracker!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit App.js
                </Text>
                <Text style={styles.instructions}>
                    {instructions}
                </Text>
                <Button style={styles.signup}
                        title="Let's Get Start"
                        onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        );
    }
}

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
        marginBottom: 5,
    },
    signup: {
        marginTop:10,
        paddingTop:5,
        borderRadius:30,


    }
});

