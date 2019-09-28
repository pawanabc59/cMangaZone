import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView} from 'react-native';
import { Container, Button, Content, Body } from 'native-base';

class ButtonList extends Component {
  render() {
    return (
      <Container>
        <Content>
            <View style={{margin:7}}>
                <Button light style={{padding:30}}>
                  <Body>
                    <Text style={{fontSize:13}}>{this.props.title}</Text>
                    <Text style={{color:'violet', fontSize:16}}>{this.props.type}</Text>
                  </Body>
                </Button>
            </View>
        </Content>
      </Container>
    ); 
  }
}

export default ButtonList;