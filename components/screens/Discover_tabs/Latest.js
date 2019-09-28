import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import {Button, Container, Body, Content, Card, CardItem} from 'native-base';

import SingleList from '../Comic_list/SingleComic';

class Latest extends Component {
  render() {
    return (
      <Container>
        <Content>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <ScrollView horizontal={true} style={{marginTop:15, paddingLeft:5}}>
                <SingleList imageUri={require('../../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                <SingleList imageUri={require('../../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                <SingleList imageUri={require('../../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
              </ScrollView>

              <ScrollView horizontal={true} style={{marginTop:-500, paddingLeft:5}}>
                <SingleList imageUri={require('../../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                <SingleList imageUri={require('../../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                <SingleList imageUri={require('../../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
              </ScrollView>

              <ScrollView horizontal={true} style={{marginTop:-500, paddingLeft:5}}>
                <SingleList imageUri={require('../../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                <SingleList imageUri={require('../../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                <SingleList imageUri={require('../../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
              </ScrollView>

              <ScrollView horizontal={true} style={{marginTop:-500, paddingLeft:5}}>
                <SingleList imageUri={require('../../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                <SingleList imageUri={require('../../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                <SingleList imageUri={require('../../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
              </ScrollView>

              <ScrollView horizontal={true} style={{marginTop:-500, paddingLeft:5}}>
                <SingleList imageUri={require('../../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                <SingleList imageUri={require('../../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                <SingleList imageUri={require('../../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
              </ScrollView>

              <ScrollView horizontal={true} style={{marginTop:-500, paddingLeft:5, marginBottom:0}}>
                <SingleList imageUri={require('../../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                <SingleList imageUri={require('../../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                <SingleList imageUri={require('../../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
              </ScrollView>
              
            </View>

            <Card transparent style={{marginTop:-522}}>
              <CardItem header><Text>...</Text></CardItem>
            </Card>
          </ScrollView>
        </Content>
      </Container>
    ); 
  }
}

export default Latest;