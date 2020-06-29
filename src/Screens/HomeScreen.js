import React from 'react';

import { 
  View, 
  StyleSheet, 
} from 'react-native';

const HomeScreen = props => {
  return (
    <View style={ styles.root }>
      
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    padding: 15,
  },
  alignCenter: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  largeButton: {
    backgroundColor: '#000000',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#000000',
    height: 50,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
  },
  smallButton: {
    backgroundColor: '#000000',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#000000',
    height: 30,
    alignItems: 'center',
    borderRadius: 20,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 10,
    marginBottom: 20,
  },
  largeButtonText: {
    color: '#FFFFFF',
    alignItems: 'center',
    paddingVertical: 10,
    fontSize: 16,
  },
  smallButtonText: {
    color: '#FFFFFF',
    alignItems: 'center',
    paddingVertical: 7,
    fontSize: 12,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  oneLineInputText: {
    padding: 10,
    marginTop: 5,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 5,
  },
  multiLineInputText: {
    padding: 10,
    marginTop: 5,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 5,
  }
});