import * as React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

interface Props {
  page: number;
  setPage: any;
}

export const MainPage: React.FC<Props> = ({ page, setPage }) => {
  const pagetitle = `page ${page}`
  return (
    <View>
      <Text style={styles.sectionTitle}>test page {page}</Text>
      <View style={styles.mainBanner}>
        <Image style={styles.mainBanner} source={require('@foodtruckmap/common/src/static/banner.png')}/>
      </View>
      <Button title={pagetitle} onPress={() => {
        setPage(page === 0 ? 1 : 0)
      }} />
    </View>
  )
}

const styles = StyleSheet.create({
  mainBanner: {
    height: 100,
    width: '100%',
    backgroundColor: '#f3f3f3'
  },
  mainBannerImage: {
    height: 100,
    width: '100%',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600'
  }
})