import React, {useContext, useState} from 'react';
import {
  Image,
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
} from "react-native";
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

interface IProps {
  id: number,
  name: string,
  price: number,
  content: string,
  imgURL: string,
  isSoldOut: boolean
  handleMenuSubmit: any,
}

export default (props:IProps) => {

  const [editText] = useState({
    price: props.price, 
    name: props.name, 
    content: props.content, 
    isSoldOut: props.isSoldOut,
  })

  const [isEditing, setIsEditing] = useState(false);

  const onChangeText = (target: string, text: string) => {
    editText[target] = text;
  }
  
  const submit = () => {
    let requestDto = {
      name: editText.name,
      content: editText.content,
      price: editText.price,
    }
    props.handleMenuSubmit(props.id, requestDto);
    setIsEditing(false);
  }
  
  const cancel = () => {
    setIsEditing(false);
  }

  const nonEditingComponent = () => {
    return (
      <View>
        <Text style={[styles.input, LocalStyles.form]}>{props.name}</Text>
        <Text style={[styles.input, LocalStyles.form]}>{props.content}</Text>
        <Text style={[styles.input, LocalStyles.form]}>{props.price}</Text>
          <Button title="수정" onPress={()=> setIsEditing(true)}></Button>
        </View>
    )
  }

  const editingComponent = () => {
    return (
        <View>
            <TextInput
              style={[styles.input, LocalStyles.form]}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              defaultValue={props.name}
              onChangeText={text => onChangeText('name', text)}
            />
            <TextInput
              style={[styles.input, LocalStyles.form]}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              defaultValue={props.content}
              onChangeText={text => onChangeText('content', text)}
            />
            <TextInput
              style={[styles.input, LocalStyles.form]}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              defaultValue={String(props.price)}
              onChangeText={text => onChangeText('price', text)}
            />
            <Button title="완료" onPress={()=> submit()}></Button>
            <Button title="취소" onPress={()=> cancel()}></Button>
          </View>
    )
  }

  return (
    <View>
      <Image
      style={{width: 50, height: 50}}
      source={{uri: props.imgURL}}
      />  
     {isEditing
      ? editingComponent()
      : nonEditingComponent()
    }
    </View>
  );
  
};
