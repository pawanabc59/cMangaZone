import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Container, Header, Content, Tab, Tabs, TabHeading } from 'native-base';

import Icon from 'react-native-vector-icons/Ionicons'

import Discovery from './Discovery';
import Favorites from './Favorites';
import Recent from './Recent';
import Download from './Download';
import Account from './Account';

class TabsExample extends Component {
  // static navigationOptions = {
  //   header: null
  // }
  render() {
    return (
      <Container>
        <Tabs locked={true} tabBarPosition="bottom" >
          {/* <Tab heading={ <TabHeading><Icon name="ios-globe" size={24}/><Text>DISCOVERY</Text></TabHeading> }> */}
          <Tab tabStyle={{backgroundColor:'white', borderTopColor:'grey', borderTopWidth: 0.4}} activeTabStyle={{backgroundColor:'white', borderTopColor:'grey', borderTopWidth: 0.4}} textStyle={{fontSize:10, color:'black'}} activeTextStyle={{fontSize:10, color:'violet'}} heading="DISCOVER" >
            <Discovery />
          </Tab>
          {/* <Tab heading={<TabHeading><Icon name="ios-heart-empty" size={24}/><Text>FAVORITES</Text></TabHeading>}> */}
          <Tab tabStyle={{backgroundColor:'white', borderTopColor:'grey', borderTopWidth: 0.4}} activeTabStyle={{backgroundColor:'white', borderTopColor:'grey', borderTopWidth: 0.4}} textStyle={{fontSize:10, color:'black'}} activeTextStyle={{fontSize:10, color:'violet'}} heading="FAVORITES">
            <Favorites />
          </Tab>
          {/* <Tab heading={ <TabHeading><Icon name="ios-journal" size={24} /><Text>RECENT</Text></TabHeading> } > */}
          <Tab tabStyle={{backgroundColor:'white', borderTopColor:'grey', borderTopWidth: 0.4}} activeTabStyle={{backgroundColor:'white', borderTopColor:'grey', borderTopWidth: 0.4}} textStyle={{fontSize:10, color:'black'}} activeTextStyle={{fontSize:10, color:'violet'}} heading="RECENT">
            <Recent />
          </Tab>
          {/* <Tab heading={<TabHeading><Icon name="ios-arrow-round-down" size={24}/><Text>DOWNLOAD</Text></TabHeading>} > */}
          <Tab tabStyle={{backgroundColor:'white', borderTopColor:'grey', borderTopWidth: 0.4}} activeTabStyle={{backgroundColor:'white', borderTopColor:'grey', borderTopWidth: 0.4}} textStyle={{fontSize:10, color:'black'}} activeTextStyle={{fontSize:10, color:'violet'}} heading="DOWNLOAD">
            <Download />
          </Tab>
          {/* <Tab heading={ <TabHeading><Icon name="ios-person" size={24} /><Text>ACCOUNT</Text></TabHeading> }> */}
          <Tab tabStyle={{backgroundColor:'white', borderTopColor:'grey', borderTopWidth: 0.4}} activeTabStyle={{backgroundColor:'white', borderTopColor:'grey', borderTopWidth: 0.4}} textStyle={{fontSize:10, color:'black'}} activeTextStyle={{fontSize:10, color:'violet'}} heading="ACCOUNT">
            <Account />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default TabsExample;