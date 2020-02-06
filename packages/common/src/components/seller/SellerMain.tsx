import React, { useContext, useEffect, useState } from 'react';
import {
  Image,
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
} from "react-native";

import MenuList from './MenuList';
import Line from '../Line'
import axios from 'axios'
import SellerState from './SellerState'

import { mainStoreContext } from '../../store/MainStore';

interface IState {
  id: Number,
  imgURL: string,
  writer: string,
  title: string,
  contents: string,
  latitude: Number,
  longitude: Number,
  state: string,
  menus: [],
}
import { CustomStyle } from "../../static/CustomStyle";

const LocalStyles = StyleSheet.create({
  form: {
    width: '80%',
    alignSelf: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2AC1BC',
    margin: 10,
    width: '80%',
    alignSelf: 'center'
  },
  caption: {
    width: '80%',
    color: '#a0a0a0',
    alignSelf: 'center',
    fontSize: 13,
    marginVertical: 5,
    marginLeft: 10
  }
});

const styles = { ...CustomStyle, ...LocalStyles }

export default () => {
  const [data, setData] = useState({ id: '', imgURL: '', title: '', contents: '', latitude: 0, longitude: 0, state: '', menus: [] });
  const [isEditing, setIsEditing] = useState({ id: false, imgURL: false, title: false, contents: false, latitude: false, longitude: false, state: false, menus: [] });
  const [editText, setEditText] = useState({ id: '', imgURL: '', title: '', contents: '', latitude: 0, longitude: 0, state: '', menus: [] })

  const mainStore = useContext(mainStoreContext)

  useEffect(() => {
    axios.get('/trucks/1')
      .then((res) => {
        setData(res.data);
        setEditText(res.data);
      })
  }, []);

  const editComponent = (target: string) => {
    return (
      <View>
        {isEditing[target]
          ? <View>
            <TextInput
              style={[styles.input, LocalStyles.form]}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              defaultValue={data[target]}
              onChangeText={text => onChangeText(target, text)}
            />
            <Button title="완료" onPress={() => submit(target)}></Button>
            <Button title="취소" onPress={() => cancel(target)}></Button>
          </View>
          : <View>
            <Text style={[styles.input, LocalStyles.form]}>{data[target]}</Text>
            <Button title="수정" onPress={() => getdd(target)}></Button>
          </View>
        }
      </View>
    )
  }

  const onChangeText = (target: string, text: string) => {
    editText[target] = text;
  }

  const submit = (target: string) => {
    let requestDto = {
      title: data.title,
      contents: data.contents,
      imgURL: data.imgURL,
      latitude: data.latitude,
      longitude: data.longitude,
    };

    requestDto[target] = editText[target];

    axios.put('/trucks/update/1', requestDto)
      .then((res) => {
        setData(res.data);
      })
    getdd(target);
  }

  const cancel = (target: string) => {
    editText[target] = data[target];
    getdd(target);
  }

  const getdd = (target: string) => {
    const result = { ...isEditing };
    result[target] = !result[target];
    setIsEditing(result);
  }

  const handleMenuSubmit = (menuId, requestDto) => {
    axios.put(`/menus/${menuId}`, requestDto)
      .then((res) => {
        const updatedMenu = res.data;
        const newMenus = data.menus.map(menu => menu.id === updatedMenu.id ? updatedMenu : menu );
        setData({...data, menus: newMenus})
      })
  }

  return (
    <View>
      <SellerState></SellerState>
      <Line></Line>
      <View>
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: data.imgURL }}
        />
        <Text style={LocalStyles.title}>푸드트럭 이름</Text>
        {editComponent('title')}
      </View>

      <Line></Line>

      <View>
        <Text style={LocalStyles.title}>소개글</Text>
        {editComponent('contents')}
      </View>

      <Line></Line>

      <MenuList menulist={data.menus} handleMenuSubmit={handleMenuSubmit}></MenuList>

      <Line></Line>
    </View>
  )
}