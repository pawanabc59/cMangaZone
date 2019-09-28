import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Picker, ScrollView} from 'react-native';
import { Container, Content, Card, CardItem, Left, Right, Form, Icon, Body } from 'native-base';

import Headers from '../screens/Headers/Header';
import SingleList from '../screens/Comic_list/SingleComic';

class Favorites extends Component {

  constructor() {
    super();
    this.state = {
      selected: ""
    };
  }
  // onValueChange(value: String) {
  //   this.setState({
  //     selected: value
  //   });
  // }

  render() {
    return (
      <Container>
        <Headers title="Favorites" />
        {/* <Text>aklsgdnkl; asdljkf asod;jflk asd;flj</Text> */}
        <Content style={{marginTop:-515, paddingTop:0}}>
          <Card transparent style={{marginTop:-10}}>
            <CardItem header>
              <Left>
                <Text style={{fontSize:12}}>29 mangas</Text>
                <Text style={{marginLeft:90, marginRight:0}}>Sort by:</Text>
              </Left>
              <Body>
                <Picker
                    // mode="dropdown"
                    // iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "violet", fontSize: 35 }} />}
                    style={{ width: '100%', marginLeft: 25, paddingRight:0 }}
                    selectedValue={this.state.selected}
                    // onValueChange={this.onValueChange.bind(this)}
                    onValueChange={(itemValue, itemIndex) => this.setState({selected:itemValue})}
                  >
                    <Picker.Item label="Last Updated" value="last_updated" />
                    <Picker.Item label="Alphabetical" value="alphabetical" />
                    <Picker.Item label="Last Bookmarked" value="last_bookmarked" />
                  </Picker>
              </Body>         
            </CardItem>
          </Card>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <ScrollView horizontal={true} style={{paddingLeft:5}}>
                <SingleList imageUri={require('../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                <SingleList imageUri={require('../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                <SingleList imageUri={require('../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
              </ScrollView>

              <ScrollView horizontal={true} style={{marginTop:-500, paddingLeft:5}}>
                <SingleList imageUri={require('../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                <SingleList imageUri={require('../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                <SingleList imageUri={require('../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
              </ScrollView>

              <ScrollView horizontal={true} style={{marginTop:-500, paddingLeft:5}}>
                <SingleList imageUri={require('../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                <SingleList imageUri={require('../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                <SingleList imageUri={require('../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
              </ScrollView>

              <ScrollView horizontal={true} style={{marginTop:-500, paddingLeft:5}}>
                <SingleList imageUri={require('../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                <SingleList imageUri={require('../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                <SingleList imageUri={require('../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
              </ScrollView>

              <ScrollView horizontal={true} style={{marginTop:-500, paddingLeft:5}}>
                <SingleList imageUri={require('../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                <SingleList imageUri={require('../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                <SingleList imageUri={require('../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
              </ScrollView>

              <ScrollView horizontal={true} style={{marginTop:-500, paddingLeft:5, marginBottom:0}}>
                <SingleList imageUri={require('../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                <SingleList imageUri={require('../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                <SingleList imageUri={require('../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
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

export default Favorites;