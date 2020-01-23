import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
 } from "react-native";

interface IProps {
  title:string
}


export default (props:IProps) => {

  return (
    <View>
      <Text style={styles.truck}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  truck: {
    paddingVertical: 10,
    borderBottomWidth: 1,
  }
});