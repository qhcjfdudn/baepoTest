import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';
import axios from 'axios';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import { Router } from './Router';
import TruckList from './components/list/TruckList'
import TruckDetail from './components/foodtruckDetail/TruckDetail'

function getHello() {
  axios.get('http://70.12.247.106:8001/hello')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Step One!!!~</Text>
      <Text style={styles.sectionDescription}>
        Edit <Text style={styles.highlight}>App.tsx</Text> to change
        this screen and then come back to see your edits.
              </Text>
      <Text style={styles.sectionDescription}>{count}</Text>
      <Button title="increment" onPress={() => setCount(count + 1)}/>
      <Button onPress={getHello} title="getHello"/>
      <Text>---------</Text>
      <TruckList/>
      <TruckDetail/>
      <Text>---------</Text>
      <LoginForm></LoginForm>
      <Text>텍스트</Text>
      <SignUpForm></SignUpForm>
      <Router />
    </View>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});