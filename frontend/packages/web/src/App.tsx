import * as React from 'react'
import { Text, View, Button } from 'react-native';
import axios from 'axios';

function getHello() {
  axios.get('http://70.12.247.106:8001/hello')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

const App: React.FC = () => {
  return (
    <View>
      <Text> Hello from react native web ! </Text>
      <Button onPress={getHello} title="getHello"/>
    </View>
  )
}

export default App;