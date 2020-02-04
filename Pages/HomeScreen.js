import React, {Component} from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  Dimensions,
  BackHandler,
  Alert,
} from 'react-native';
import {WebView} from 'react-native-webview';

export default class HomeScreen extends Component {
  state = {visible: true};

  hideSpinner() {
    this.setState({visible: false});
  }

  render() {
    const {height, width} = Dimensions.get('window');
    return (
      <View style={{flex: 1}}>
        <WebView
          source={{uri: 'https://www.proprofs.com/survey/t/?title=mjuzg'}}
          onLoad={() => this.hideSpinner()}
        />
        {this.state.visible && (
          <ActivityIndicator
            style={{position: 'absolute', top: height / 2, left: width / 2}}
            size="large"
          />
        )}
      </View>
    );
  }
}
