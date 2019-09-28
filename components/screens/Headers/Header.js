import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Container, Left, Header, Button, Body, Right } from 'native-base';

import Icon from 'react-native-vector-icons/Ionicons'

class Headers extends Component {
  render() {
    return (
      <Container>
          {/* androidStatusBarColor="violet" : this is used to change the color of status bar where battery percentage is shown */}
        <Header androidStatusBarColor='grey' transparent style={{borderBottomColor:'grey', borderBottomWidth:1}}>
            <Left>
                <Button transparent onPress={() => alert("This is to filter out the objects. Yet to be implemented.")}>
                    <Icon name="ios-funnel" size={24}/>
                </Button>
            </Left>
            <Body>
                <Text style={{fontSize:18, marginLeft:65, fontWeight:'bold', color:'black'}}>{this.props.title}</Text>
            </Body>
            <Right>
                <Button transparent onPress={() => alert("This is to select and delete the item. Yet to be implemented")}>
                    <Icon name="ios-create" size={24}/>
                </Button>
            </Right>
        </Header>
      </Container>
    ); 
  }
}

export default Headers;