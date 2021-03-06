import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { CustomText } from '../../static/CustomStyle';
import Review from './Review';
import { Colors } from '../../static/CustomColor';
import { ReviewPost } from './ReviewPost';

interface IReview {
  id: number,
  content: string,
  startRating: number,
  createdAt: string,
  updatedAt: string,
  truckId: number,
  userEmail: string
}

interface IProps {
  reviewList: IReview[]
}

export default (props: IProps) => {

  return (
    <View style={styles.menuListContainer}>
      <View style={styles.menuListContentContainer}>
        <View style={styles.menuListTitle}>
          <Text style={[CustomText.textCenter, CustomText.titleHN, { fontSize: 22 }]}>리뷰</Text>
        </View>
        <ReviewPost />
        {props.reviewList.length === 0 ?
          <View style={{paddingHorizontal: 20, paddingTop: 10,}}>
            <Text style={CustomText.title}>✏ 리뷰가 없어요. 리뷰를 작성해주세요! ✏</Text>
          </View>
          : <FlatList<IReview>
            data={props.reviewList}
            renderItem={({ item }) =>
              <Review
                id={item.id}
                content={item.content}
                startRating={item.startRating}
                createdAt={item.createdAt}
                updatedAt={item.updatedAt}
                truckId={item.truckId}
                userEmail={item.userEmail}
              />}
            keyExtractor={item => item.userEmail}
          />
        }
      </View>
    </View>
  );

};

const styles = StyleSheet.create({
  menuListContainer: {
    paddingHorizontal: 12,
    paddingBottom: 20
  },
  menuListContentContainer: {
    borderRightWidth: 2,
    borderLeftWidth: 1,
    borderBottomWidth: 4,
    borderTopWidth: 1,
    borderLeftColor: '#e6e6e8',
    borderRightColor: '#d6d6d8',
    borderBottomColor: '#86878b',
    borderTopColor: '#f6f6f8',
    paddingTop: 10,
    paddingBottom: 20,
    borderRadius: 5,
  },
  menuListTitle: {
    alignSelf: 'center',
  }
})