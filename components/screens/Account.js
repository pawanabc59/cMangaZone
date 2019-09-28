import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Switch, ScrollView} from 'react-native';
import { Container, List, ListItem, Header, Body, Left, Right, Button, Content } from 'native-base';

import TabLists from './Account/TabLists';

class Account extends Component {
  render() {
    return (
      <Container>
        <Header androidStatusBarColor='grey' transparent style={{borderBottomColor:'grey', borderBottomWidth:1}}>
          <Text style={{fontSize:18, fontWeight:'bold', color:'black'}}>Account</Text>
        </Header>
        <Content>
          <ScrollView showsVerticalScrollIndicator={false}>
            <List>
              <ListItem itemDivider></ListItem>
              <TabLists listTitle="Account and Security" />
              <ListItem itemDivider></ListItem>
              <TabLists listTitle="Notification Center"/>
              <TabLists listTitle="My Comments" />
              <ListItem itemDivider></ListItem>
            </List>

            <List>
              <ListItem>
                <Left>
                  <Text>Download over Wifi Only</Text>
                </Left>
                <Right><Switch value={false}/></Right>
              </ListItem>
              <ListItem itemDivider></ListItem>
            </List>

            <List>
              <TabLists listTitle="Reading Tips" />
              <TabLists listTitle="Feedback" />
              <ListItem itemDivider></ListItem>
              <TabLists listTitle="About Us" />
              <TabLists listTitle="Disclaimer" />
              <TabLists listTitle="Clear Cache" />
            </List>

            <Button block style={{backgroundColor:'violet', marginTop:10, marginBottom:15}}>
              <Text style={{fontSize:25, color:'white', marginBottom:4, marginTop:4}}>Sign Out</Text>
            </Button>
            </ScrollView>
        </Content>
      </Container>
    ); 
  }
}

export default Account;