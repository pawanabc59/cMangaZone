import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

class imageList extends Component {
  render() {
    return (
      <View style={{height:135, width:300, marginLeft:7, marginRight:7, elevation:10}}>
          <Image source={this.props.imageUri} style={{height:null, width:null, flex:1, borderRadius:2, resizeMode:'stretch'}} />
      </View>
    ); 
  }
}

export default imageList;