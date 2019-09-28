import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Left, Right, Button, TabHeading } from 'native-base';

import Icon from 'react-native-vector-icons/Ionicons'

import ForU from './Discover_tabs/ForU';
import ALL from './Discover_tabs/ALL';
import Latest from './Discover_tabs/Latest';
class Discovery extends Component {
  static navigationOptions = {
      header: null
    }
  render() {
    return (
      <Container style={{marginTop:25}}>
        <Tabs locked={true}>
          {/* <Left> */}
          <Tab tabStyle={{backgroundColor:'white', borderBottomWidth:0, elevation:0}} activeTabStyle={{backgroundColor:'white', borderBottomWidth:0, elevation:0}} textStyle={{color:'grey'}} activeTextStyle={{color:'violet'}} heading="For U">
            <ForU />
          </Tab>
          <Tab tabStyle={{backgroundColor:'white', borderBottomWidth:0, elevation:0}} activeTabStyle={{backgroundColor:'white', borderBottomWidth:0, elevation:0}} textStyle={{color:'grey'}} activeTextStyle={{color:'violet'}} heading="ALL">
            <ALL />
          </Tab>
          <Tab tabStyle={{backgroundColor:'white', borderBottomWidth:0, elevation:0}} activeTabStyle={{backgroundColor:'white', borderBottomWidth:0, elevation:0}} textStyle={{color:'grey'}} activeTextStyle={{color:'violet'}} heading="Latest">
            <Latest />
          </Tab>
          <Tab tabStyle={{backgroundColor:'white', borderBottomWidth:0, elevation:0}} activeTabStyle={{backgroundColor:'white', borderBottomWidth:0, elevation:0}} textStyle={{color:'grey'}} activeTextStyle={{color:'violet'}} heading={<TabHeading style={{backgroundColor: 'white'}}><Icon name="ios-search" size={20}/></TabHeading>}>
            
          </Tab>
          {/* </Left> */}
          {/* <Right>
            <Button transparent>
              <Icon name="ios-search"/>
            </Button>
          </Right> */}
        </Tabs>
      </Container>
    );
  }
}

export default Discovery;