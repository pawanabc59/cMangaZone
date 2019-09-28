import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import { Container, Content, Card, CardItem, Body, Right, Left } from 'native-base';

import ComicList from '../Comic_list/ComicList';
import ImageList from '../Comic_list/imageList';
import PowerList from '../Comic_list/PowerList';

class ForU extends Component {
  render() {
    return (
      <Container>
        <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false} >
          <Swiper 
          dot={<View style={{backgroundColor:'white', width:9, height:9, borderRadius:4, marginTop:20, marginLeft:3, marginRight:4}} />} 
          activeDot={<View style={{backgroundColor:'violet', width:9, height:9, borderRadius:4, marginTop:20, marginLeft:3, marginRight:4}} />} 
          autoplay={true} 
          style={{height:150, marginTop:10, marginLeft:7, marginRight:7}} 
          >
            <View style={{flex:1}}>
              <Image style={{flex:1, width:null, height:null, resizeMode:'stretch',marginLeft:7, marginRight:7}} source={require('../../../assets/home.jpg')} />
            </View>
            <View style={{flex:1}}>
              <Image style={{flex:1, width:null, height:null, resizeMode:'stretch',marginLeft:7, marginRight:7}} source={require('../../../assets/home.jpg')} />
            </View>
            <View style={{flex:1}}>
              <Image style={{flex:1, width:null, height:null, resizeMode:'stretch',marginLeft:7, marginRight:7}} source={require('../../../assets/home.jpg')} />
            </View>
            <View style={{flex:1}}>
              <Image style={{flex:1, width:null, height:null, resizeMode:'stretch',marginLeft:7, marginRight:7}} source={require('../../../assets/home.jpg')} />
            </View>
            <View style={{flex:1}}>
              <Image style={{flex:1, width:null, height:null, resizeMode:'stretch',marginLeft:7, marginRight:7}} source={require('../../../assets/home.jpg')} />
            </View>
          </Swiper>

          <Content>
            <Card transparent>
              <CardItem header button onPress={() => alert("This is Card Header")}>
                <Text style={{fontWeight:'700', fontSize:16, color:'black'}}>Hot Update</Text>
              </CardItem>
            </Card>
            <View style={{paddingLeft:7, paddingRight:7}}>
                  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <ComicList imageUri={require('../../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                    <ComicList imageUri={require('../../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                    <ComicList imageUri={require('../../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                    <ComicList imageUri={require('../../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                    <ComicList imageUri={require('../../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                    <ComicList imageUri={require('../../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                    <ComicList imageUri={require('../../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                  </ScrollView>
            </View>

            <Card transparent style={{marginTop:0, marginBottom:0}}>
              <CardItem header button onPress={() => alert("This is Card Header")}>
                <Left>
                  <Text style={{fontWeight:'700', fontSize:16, color:'black'}}>Recommended</Text>
                </Left>
                <Right>
                  <Text style={{color:'violet', fontWeight:'700'}}>More...</Text>
                </Right>
              </CardItem>
            </Card>
            <View style={{paddingLeft:7, paddingRight:7}}>
                  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <ComicList imageUri={require('../../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                    <ComicList imageUri={require('../../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                    <ComicList imageUri={require('../../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                    <ComicList imageUri={require('../../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                    <ComicList imageUri={require('../../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                    <ComicList imageUri={require('../../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                    <ComicList imageUri={require('../../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                  </ScrollView>
            </View>

            <View style={{marginTop:15, padding:7}}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <ImageList imageUri={require('../../../assets/home.jpg')}/>
                <ImageList imageUri={require('../../../assets/home.jpg')}/>
                <ImageList imageUri={require('../../../assets/home.jpg')}/>
              </ScrollView>
            </View>

            <Card transparent>
              <CardItem header style={{marginBottom:0}}>
                <Left>
                  <Text style={{fontWeight:'700', fontSize:16, color:'black'}}>Power Ranking</Text>
                </Left>
                <Right>
                  <Text style={{color:'violet', fontWeight:'700'}}>More...</Text>
                </Right>
              </CardItem>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View>
                  <PowerList imageUri={require('../../../assets/home.jpg')} count="1" comicName="One Piece"/>
                  <PowerList imageUri={require('../../../assets/home.jpg')} count="2" comicName="One Piece"/>
                  <PowerList imageUri={require('../../../assets/home.jpg')} count="3" comicName="One Piece"/>
                  <PowerList imageUri={require('../../../assets/home.jpg')} count="4" comicName="One Piece"/>
                  <PowerList imageUri={require('../../../assets/home.jpg')} count="5" comicName="One Piece"/>
                </View>
                <View>
                  <PowerList imageUri={require('../../../assets/home.jpg')} count="6" comicName="One Piece"/>
                  <PowerList imageUri={require('../../../assets/home.jpg')} count="7" comicName="One Piece"/>
                  <PowerList imageUri={require('../../../assets/home.jpg')} count="8" comicName="One Piece"/>
                  <PowerList imageUri={require('../../../assets/home.jpg')} count="9" comicName="One Piece"/>
                  <PowerList imageUri={require('../../../assets/home.jpg')} count="10" comicName="One Piece"/>
                </View>
              </ScrollView>
            </Card>

            <View style={{padding:7, marginTop:15}}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <ImageList imageUri={require('../../../assets/home.jpg')}/>
                <ImageList imageUri={require('../../../assets/home.jpg')}/>
                <ImageList imageUri={require('../../../assets/home.jpg')}/>
                <ImageList imageUri={require('../../../assets/home.jpg')}/>
              </ScrollView>
            </View>

            <Card transparent style={{marginBottom:0}}>
              <CardItem header button onPress={() => alert("This is Card Header")}>
                <Left>
                  <Text style={{fontWeight:'700', fontSize:16, color:'black'}}>Being Reading Right Now</Text>
                </Left>
                <Right>
                  <Text style={{color:'violet', fontWeight:'700'}}>More...</Text>
                </Right>
              </CardItem>
            </Card>
            <View style={{paddingLeft:7, paddingRight:7}}>
                  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <ComicList imageUri={require('../../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                    <ComicList imageUri={require('../../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                    <ComicList imageUri={require('../../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                    <ComicList imageUri={require('../../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                    <ComicList imageUri={require('../../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                    <ComicList imageUri={require('../../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                    <ComicList imageUri={require('../../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                  </ScrollView>
            </View>

            <Card transparent style={{ marginTop:0, marginBottom:0}}>
              <CardItem header button onPress={() => alert("This is Card Header")}>
                <Left>
                  <Text style={{fontWeight:'700', fontSize:16, color:'black'}}>Popular This Week</Text>
                </Left>
                <Right>
                  <Text style={{color:'violet', fontWeight:'700'}}>More...</Text>
                </Right>
              </CardItem>
            </Card>
            <View style={{paddingLeft:7, paddingRight:7}}>
                  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <ComicList imageUri={require('../../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                    <ComicList imageUri={require('../../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                    <ComicList imageUri={require('../../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                    <ComicList imageUri={require('../../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                    <ComicList imageUri={require('../../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                    <ComicList imageUri={require('../../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                    <ComicList imageUri={require('../../../assets/home.jpg')} comicName="One Piece" creator="Oda" />
                  </ScrollView>
            </View>

            <View style={{padding:7, marginTop:0}}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <ImageList imageUri={require('../../../assets/home.jpg')}/>
                <ImageList imageUri={require('../../../assets/home.jpg')}/>
                <ImageList imageUri={require('../../../assets/home.jpg')}/>
                <ImageList imageUri={require('../../../assets/home.jpg')}/>
              </ScrollView>
            </View>

          </Content>

        </ScrollView>
      </Container>
    ); 
  }
}

export default ForU;