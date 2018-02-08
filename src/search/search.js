import React, { Component } from 'react';
import { Container, Header, Item, Input  , Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

import BusRoute from '../bus-route/bus-route';
import TabFooter from '../footer/footer';
export default class Search extends Component {
    render() {
        return (
            <Container>
                <Header searchBar rounded>
                    {/*<Left>*/}
                    {/*<Button transparent>*/}
                    {/*<Icon name='menu' />*/}
                    {/*</Button>*/}
                    {/*</Left>*/}

                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search Bus Route" />
                        <Icon name="ios-bus" />
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>
                <Content>
                    <BusRoute></BusRoute>
                </Content>
               <TabFooter />
            </Container>
        );
    }
}