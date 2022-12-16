import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {StackActions} from '@react-navigation/native';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(StackActions.replace('HomePage'));
    }, 2000);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./ss.png')} />
      </View>
    );
  }
}

export default SplashScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
