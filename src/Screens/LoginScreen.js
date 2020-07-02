import React, { useState } from 'react';

import {
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
} from 'react-native';

import { Net, } from '../httpClient/request'

function LoginScreen(props) {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  
  const loginHandle = () => {
    if (!email || !password) {
      alert('Please fill all the items');
    } else {
      apiLogin();
    }
  }

  const apiLogin = () => {
    Net('/posts', {
      params: { 
        _start: 0, 
        _limit: 2,
        // email: email, 
        // password: password,
      }
    })
      .then(res => {
        console.log(res[0].title);
        console.log(res[0].id);

        props.navigation.replace('Home');
      })
      .catch(err => {
        alert('Something went wrong');
      })
  }

  return (
    <View style={ styles.root }>
      <Text>Email</Text>
      <TextInput
        style={ styles.oneLineInputText }
        onChangeText={text => setEmail(text)}
      />
      <Text>Password</Text>
      <TextInput
        style={ styles.oneLineInputText }
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity
        style={ styles.largeButton }
        onPress={() => loginHandle()}
        activeOpacity={0.5}>
        <Text style={styles.largeButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={ styles.smallButton }
        onPress={() => props.navigation.navigate('Register')}
        activeOpacity={0.5}>
        <Text style={styles.smallButtonText}>Register new Account</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginScreen;

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