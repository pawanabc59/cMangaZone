import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Container, Content, Card, CardItem, Button } from 'native-base';
// import { TouchableOpacity } from 'react-native-gesture-handler';

class ComicList extends Component {
  render() {
    return (
      <View>
              <View style={{height:155, width:90, flex:1, marginLeft:7, marginRight:7}}>
                  <View style={{flex:1}}>
                        <Image source={this.props.imageUri} style={{height:null, width:null, flex:1, resizeMode:'stretch'}} />
                  </View>
                  <View>
                      <Text style={{color:'black', fontSize:15, marginTop:4}}>{this.props.comicName}</Text>
                  </View>
                  <View>
                      <Text style={{fontSize:11, marginTop:2}}>{this.props.creator}</Text>
                  </View>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('ChapterList')}><Text>Click</Text></TouchableOpacity>
              </View>
      </View>
    ); 
  }
}

export default ComicList;
