import React, { Component } from 'react';
import { Container, Header, Item, Input  , Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';


export default class TabFooter extends Component {
    render() {
        return (
            <Footer>
                <FooterTab>
                    <Button active>
                        <Icon name="bus"/>
                        <Text>Bus Route</Text>
                    </Button>
                    <Button >
                        <Icon name="navigate"/>
                        <Text>Navigate</Text>
                    </Button>
                    <Button>
                        <Icon name="settings"/>
                        <Text>Settings</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}