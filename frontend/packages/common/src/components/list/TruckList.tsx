import React from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
 } from "react-native";
 import Truck from './Truck'

 const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

const viewabilityConfig = {
  waitForInteraction: true,
  viewAreaCoveragePercentThreshold: 95
}

export default () => {

  // useEffect(() => {
  //   axios("https://randomuser.me/api/?results=10")
  //     .then(response =>
  //       response.data.results.map(user => ({
  //         name: `{user.name.first} ${user.name.last}`,
  //         username: `{user.login.username}`,
  //         email: `{user.email}`,
  //         image: `{user.picture.thumbnail}`
  //       }))
  //     )
  //     .then(data => {
  //       setUsers(data);
  //     });
  // }, []);

  return (
    <FlatList 
    data={DATA}
    renderItem={({ item }) => <Truck title={item.title} />}
    keyExtractor={item => item.id}
    viewabilityConfig={viewabilityConfig}
/>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor:'yellow', 
    justifyContent:'space-between', 
    flexDirection:'column',
    maxWidth:'30%'
  },
});


