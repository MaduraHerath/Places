import React, { Component } from 'react';
import { Container, Header, Item, Input  , Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Provider } from 'react-redux';
import BusRoute from '../../bus-route/bus-route';
import TabFooter from '../../footer/footer';
import store from '../../store/store'
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
                    <Provider store={store}>
                    <BusRoute></BusRoute>
                    </Provider>
                </Content>

            </Container>
        );
    }
}