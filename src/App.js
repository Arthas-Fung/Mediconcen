import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

function SplashScreen({ navigation }) {
  setTimeout(() => {
    navigation.replace('Login');
  }, 2000);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Splash Screen</Text>
    </View>
  );
}

function RegisterScreen({ navigation }) {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [clinicName, setClinicName] = useState('');
  let [phoneNumber, setPhoneNumber] = useState('');
  let [address, setAddress] = useState('');
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
        onPress={() => navigation.goBack()}
        activeOpacity={0.5}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

function LoginScreen({ navigation }) {
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
        onPress={() => navigation.replace('Home')}
        activeOpacity={0.5}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={ styles.smallButton }
        onPress={() => navigation.navigate('Register')}
        activeOpacity={0.5}>
        <Text style={styles.buttonText}>Register new Account</Text>
      </TouchableOpacity>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Post List"
        onPress={() => navigation.navigate('PostList')}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Splash">
        <Stack.Screen 
          name="Splash" 
          component={SplashScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
          options={{ title: 'Register Account' }} 
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: 'Login' }} 
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    padding: 15,
  },
  largeButton: {
    backgroundColor: '#000000',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#000000',
    height: 40,
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
    height: 40,
    alignItems: 'center',
    borderRadius: 20,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
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