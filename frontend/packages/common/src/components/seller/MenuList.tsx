import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    FlatList ,
    Button
 } from "react-native";
 import Menu from './Menu'

interface IMenu {
  id: number,
  name: string,
  price: number,
  content: string,
  imgURL: string,
  isSoldOut: boolean,
}


interface IProps {
  menulist: IMenu[],
  handleMenuSubmit: any
}

export default (props:IProps) => {

  const handleMenuSubmit = (menuId, requestDto) => {
    props.handleMenuSubmit(menuId, requestDto);
  }

  return (
    <View>
    <Text>---------메뉴---------</Text>
      <FlatList<IMenu>
        data={props.menulist}
        renderItem={({ item } ) => 
        <Menu 
          handleMenuSubmit={handleMenuSubmit}
          name={item.name}
          price={item.price} 
          id={item.id}
          imgURL={item.imgURL}
          content={item.content}
          isSoldOut={item.isSoldOut}
          />}
        
          keyExtractor={item => item.name}
      />
    </View>
  );
  
};
