import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body, Button, Icon,} from 'native-base';

export default class BusRoute extends Component {
    render() {
        return (

            <Card>
                <CardItem header>
                    <Text>138 | Bus Route</Text>
                </CardItem>
                <CardItem>
                    <Body>
                    <Text>
                        EST
                    </Text>
                    </Body>
                </CardItem>
                <CardItem footer>
                    <Button iconLeft red>
                        <Icon name='map' />
                        <Text>Show in Map</Text>
                    </Button>
                </CardItem>
            </Card>

        );
    }
}