import * as React from 'react';
import { useContext } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { mainStoreContext } from '../store/MainStore';
import { observer } from 'mobx-react-lite';
import { SearchList } from '../components/result/SearchList';
import { CustomStyle } from '../static/CustomStyle';
import TruckDetail from '../components/foodtruckDetail/TruckDetail';

export const RouteList: React.FC = observer(() => {
  const mainStore = useContext(mainStoreContext);

  if (status) {
    return (
      <View>
        <SearchList />
        <TruckDetail />
      </View>
    )
  }
  else {
    return (
      <View><Text>list not enabled</Text></View>
    )
  }
})