import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Switch} from 'react-native';
import { Container, List, ListItem, Left, Right } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

class TabLists extends Component {
  render() {
    return (
      <View>
          <ListItem>
            <Left>
              <Text>{this.props.listTitle}</Text>
            </Left>
            <Right><Icon name="ios-arrow-forward" size={24}/></Right>
          </ListItem>
      </View>
    ); 
  }
}

export default TabLists;