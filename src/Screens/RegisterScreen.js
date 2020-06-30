import React, { useState } from 'react';

import {
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView,
} from 'react-native';

import { Net, } from '../httpClient/request'

const RegisterScreen = props => {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [clinicName, setClinicName] = useState('');
  let [phoneNumber, setPhoneNumber] = useState('');
  let [address, setAddress] = useState('');

  const registerHandle = () => {
    if (!email || !password || !clinicName || !phoneNumber || !address) {
      alert('Please fill all the items');
    } else {
      apiRegister();
    }
  }

  const apiRegister = () => {
    Net('/posts', { 
      email: email, 
      password: password, 
      clinicName: clinicName, 
      phoneNumber: phoneNumber, 
      address: address })
      .then(res => {
        props.navigation.goBack();
      })
      .catch(err => {
        alert('Something went wrong');
      })
  }

  return (
    <View style={ styles.root }>
      <ScrollView keyboardShouldPersistTaps="handled">
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
      <Text>Clinic Name</Text>
          <TextInput
        style={ styles.oneLineInputText }
        onChangeText={text => setClinicName(text)}
      />
      <Text>Phone Number</Text>
      <TextInput
        style={ styles.oneLineInputText }
        onChangeText={text => setPhoneNumber(text)}
      />
      <Text>Address</Text>
      <TextInput
        style={ styles.multiLineInputText }
        onChangeText={text => setAddress(text)}
      />
      <TouchableOpacity
        style={ styles.largeButton }
        onPress={() => registerHandle()}
        activeOpacity={0.5}>
        <Text style={styles.largeButtonText}>Register</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default RegisterScreen;

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