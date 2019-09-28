import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Picker, ScrollView} from 'react-native';
import { Container, Content, Card, CardItem, Left, Right, Form, Icon, Body, List } from 'native-base';

import Headers from '../screens/Headers/Header';
import ListItems from './Comic_list/ListItem';

class Recent extends Component {
  render() {
    return (
      <Container>
        <Headers title="Recent" />
        <View style={{marginTop:-470}}>
          <Card transparent> 
            <CardItem header>
              <Text>1 day ago</Text>
            </CardItem>
          </Card>
        </View>
        <Content style={{marginTop:-15}}>
          <ScrollView showsVerticalScrollIndicator={false} >
            <List style={{margin:0, padding:0}}>
              <ListItems imageUri={require('../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
              <ListItems imageUri={require('../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
              <ListItems imageUri={require('../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
              <ListItems imageUri={require('../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
              <ListItems imageUri={require('../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
              <ListItems imageUri={require('../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
              <ListItems imageUri={require('../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
              <ListItems imageUri={require('../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
              <ListItems imageUri={require('../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
              <ListItems imageUri={require('../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
              <ListItems imageUri={require('../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
              <ListItems imageUri={require('../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
            </List>
          </ScrollView>
        </Content>
      </Container>
    ); 
  }
}

export default Recent;