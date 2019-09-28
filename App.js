/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator,createAppContainer } from 'react-navigation';

import TabsExample from './components/screens/Tabs';
import ComicList from './components/screens/Comic_list/ComicList';
import ChapterList from './components/screens/Comic_list/ChapterList';
import imageList from './components/screens/Comic_list/imageList';
import PowerList from './components/screens/Comic_list/PowerList';
import SingleComic from './components/screens/Comic_list/SingleComic';
import ALL from './components/screens/Discover_tabs/ALL';
import ForU from './components/screens/Discover_tabs/ForU';
import Latest from './components/screens/Discover_tabs/Latest';
import Account from './components/screens/Account';
import Discovery from './components/screens/Discovery';
import Download from './components/screens/Download';
import Favorites from './components/screens/Favorites';
import Recent from './components/screens/Recent';

import { Content, Container } from 'native-base';

export default class App extends React.Component {
  static navigationOptions = {
      header: null
    }
  render() {
    return (
      <Container>
        {/* <AppStackNavigator /> */}
        <TabsExample />
        {/* <AppStackNavigator /> */}
      </Container>
    );
  }
}

const AppStackNavigator = createAppContainer(createStackNavigator({
  // TabsExample: TabsExample,
  ComicList: ComicList,
  ChapterList: ChapterList,
  imageList: imageList,
  PowerList: PowerList,
  SingleComic: SingleComic,
  ALL: ALL,
  ForU: ForU,
  Latest: Latest,
  Account: Account,
  Discovery: Discovery,
  Download: Download,
  Favorites: Favorites,
  Recent: Recent
}))


