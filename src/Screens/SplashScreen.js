import React from 'react';

import {
  StyleSheet,
  View, 
  Text, 
} from 'react-native';

const SplashScreen = props => {
  setTimeout(() => {
    props.navigation.replace('Login');
  }, 2000);

  return (
    <View style={ styles.alignCenter }>
      <Text>Splash Screen</Text>
    </View>
  );
}

export default SplashScreen;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    padding: 15,
  },
  alignCenter: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});