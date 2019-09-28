import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import { Container, Content, Card, CardItem } from 'native-base';

class SingleComic extends Component {
  render() {
    return (
      <Container>
          <Content>
              <View style={{height:165, width:100, flex:1, marginLeft:8, marginRight:8}}>
                  <View style={{flex:1}}>
                        <Image source={this.props.imageUri} style={{height:null, width:null, flex:1, resizeMode:'stretch'}} />
                  </View>
                  <View>
                      <Text style={{color:'black', fontSize:15, marginTop:4}}>{this.props.comicName}</Text>
                  </View>
                  <View>
                      <Text style={{fontSize:11, marginTop:2}}>{this.props.creator}</Text>
                  </View>
              </View>
          </Content>
      </Container>
    ); 
  }
}

export default SingleComic;