import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {WebView} from 'react-native-webview';

export default class HomeScreen extends Component {
  render() {
    return (
      <WebView source={{uri: 'https://form.jotform.com/200301965611445'}} />
    );
  }
}
