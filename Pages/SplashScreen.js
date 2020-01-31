import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';

export default class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Home');
    }, 1500);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../img/survay.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
