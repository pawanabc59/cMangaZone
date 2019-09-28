import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import {Left, Right, Body, List, ListItem, Content} from 'native-base';

class PowerList extends Component {
  render() {
    return (
        <Content>
            <List style={{marginTop:5, marginBottom:7, marginRight:110}}>
                <ListItem avatar>
                    <View style={{height:70, width:50, flex:1, marginTop:-10}}>
                        <Left>
                            <Image style={{ flex:1, resizeMode:'cover'}} source={this.props.imageUri} />
                        </Left>
                    </View>
                    <Text style={{fontSize: 28, color:'grey', marginLeft:7}}>{this.props.count}</Text>
                    <Body>
                        <Text style={{color:'black'}}>{this.props.comicName}</Text>
                        <Text note>Action, Adventure</Text>
                    </Body>
                </ListItem>
            </List>
        </Content>
    ); 
  }
}

export default PowerList;