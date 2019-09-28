import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Picker, ScrollView} from 'react-native';
import { Container, Content, Card, CardItem, Left, Right, Form, Icon, Body, List } from 'native-base';

import Headers from '../screens/Headers/Header';
import ListItems from './Comic_list/ListItem';

class Download extends Component {
  render() {
    return (
      <Container>
        <Headers title="Download" />
        <Content style={{marginTop:-500}}>
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

export default Download;