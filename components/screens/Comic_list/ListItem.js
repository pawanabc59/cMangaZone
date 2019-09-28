import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import { Container, ListItem, Left, Body, Right, Thumbnail } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

class ListItems extends Component {
  render() {
    return (
      <View>
          <ListItem>
                <Left>
                    <View style={{height:90, flex:1}} >
                        <Thumbnail square source={this.props.imageUri} style={{flex:1, height:null, width:75, resizeMode:'stretch'}} />
                    </View>
                </Left>
                <Body style={{marginLeft:-60}}>
                    <Text style={{marginBottom:5, fontSize:16, color: 'black'}} >{this.props.comicName}</Text>
                    <Text style={{marginTop:10}}>{this.props.creator}</Text>
                </Body>
                <Right>
                    <Icon name="ios-arrow-forward" size={24} />
                </Right>
          </ListItem>
      </View>
    ); 
  }
}

export default ListItems;