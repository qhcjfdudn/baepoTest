import React, { useContext, useEffect, useState } from 'react';
import {
  Image,
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
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
import { CustomStyle, CustomText } from "../../static/CustomStyle";
import EditBtn from '../EditBtn';

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


export default () => {
  const [data, setData] = useState({ id: '', imgURL: '', title: '', contents: '', latitude: 0, longitude: 0, state: '', menus: [] });
  const [isEditing, setIsEditing] = useState({ id: false, imgURL: false, title: false, contents: false, latitude: false, longitude: false, state: false, menus: [] });
  const [editText] = useState({ id: '', imgURL: '', title: '', contents: '', latitude: 0, longitude: 0, state: '', menus: [] })

  const mainStore = useContext(mainStoreContext)

  useEffect(() => {

    axios.get(`${mainStore.proxy}/trucks/1`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        console.log(data);
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

  const EditButton = () => {
    return (
      <TouchableOpacity activeOpacity={.5} onPress={()=>{console.log('clicked')}}>
        <Image
          style={{ width: 15, height: 15 }}
          source={require('@foodtruckmap/common/src/static/icon_processed/edit_marker.png')} />
      </TouchableOpacity>
    )
  }

  const editTitleComponent = (target: string) => {
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
            <Text style={[CustomText.titleHN, { fontSize: 24 }]}>{data.title}</Text>
            <EditButton onPress/>
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
    console.log("data: " + data[target])
    console.log("editText: " + editText[target])

    let requestDto = {
      title: data.title,
      contents: data.contents,
      imgURL: data.imgURL,
      latitude: data.latitude,
      longitude: data.longitude,
    };

    requestDto[target] = editText[target];
    console.log(requestDto);

    axios.put(`${mainStore.proxy}/trucks/update/1`, requestDto)
      .then((res) => {
        console.log(res.data);
      })
    getdd(target);
  }

  const cancel = (target: string) => {
    console.log("before editText : " + editText[target]);
    editText[target] = data[target];
    console.log("after editText : " + editText[target]);
    getdd(target);
    console.log(isEditing)
  }

  const getdd = (target: string) => {
    const result = { ...isEditing };
    result[target] = !result[target];
    setIsEditing(result);
  }

  return (
    <View>

      <Image
        style={{ width: '100%', height: 150, marginBottom: -30 }}
        source={{ uri: data.imgURL ? data.imgURL : '' }}
        defaultSource={{ uri: `https://picsum.photos/id/${data.id ? data.id : 0}/200` }}
      />
      <View style={{ paddingBottom: 10, backgroundColor: '#edaa11', width: '70%', alignSelf: 'center', borderRadius: 9, marginBottom: 5 }}>
        <View style={{ width: '100%', backgroundColor: '#f2be46', paddingHorizontal: 15, paddingVertical: 8, borderRadius: 9, alignItems: 'center' }}>
          {editTitleComponent(data.title)}
          <Text style={[CustomText.titleHN, { fontSize: 24 }]}>{data.title}</Text>
        </View>
      </View>
      <Line></Line>
      <View>
        <Text style={LocalStyles.title}>푸드트럭 이름</Text>
        {editComponent('title')}
      </View>

      <Line></Line>

      <View>
        <Text style={LocalStyles.title}>소개글</Text>
        {editComponent('contents')}
      </View>

      <Line></Line>

      <MenuList menulist={data.menus}></MenuList>

      <SellerState></SellerState>
      <Line></Line>
    </View>
  )
}

const localStyle = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    alignSelf: 'center',
    marginVertical: 20,
  },
  line: {
    borderBottomWidth: 1,
    borderColor: '#eeeeee',
    width: '95%',
    margin: 'auto',
  },
  intro: {
    fontSize: 10
  },
  truckContentsContainer: {
    paddingBottom: 10,
  },
})

const styles = { ...CustomText, ...CustomStyle, ...localStyle }