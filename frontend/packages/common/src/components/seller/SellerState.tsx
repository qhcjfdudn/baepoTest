import React, { useState } from 'react';
import {
  View,
  Button,
} from "react-native";
import { SellerMaps } from '../map/sellerMaps';

export default () => {

  const [data, setData] = useState({open: false, prepairing: false, closed: true});

  const open = (v) => {
    if(v == 0) setData({open: true, prepairing: false, closed: false});
    else if(v == 1) setData({open: false, prepairing: true, closed: false});
    else if(v == 2) setData({open: false, prepairing: false, closed: true});
  }
  
    return (
      <View>
        { (data.open == true || data.prepairing == true) && <SellerMaps/> }
        { data.closed == true &&
          <View>
            <Button title="영업중" onPress={() => open(0)}></Button>
            <Button title="준비중" onPress={() => open(1)}></Button>
            <Button title="Closed" onPress={() => open(2)}></Button>
          </View>
        }
      </View>
    ) 
}