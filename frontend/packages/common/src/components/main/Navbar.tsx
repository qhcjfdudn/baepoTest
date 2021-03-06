import React, { useContext } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { observer } from 'mobx-react-lite';
import { mainStoreContext } from '../../store/MainStore';
import { CustomStyle } from '../../static/CustomStyle';
import { COLOR_HEADER } from '../../static/CustomColor';
import { searchResultContext } from '../../store/SearchStore';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {}

export const Navbar: React.FC<Props> = observer(({ history }) => {
  const mainStore = useContext(mainStoreContext);

  const checkAuth = () => {
    const isSeller = localStorage.getItem('isSeller') === 'true' ? true : false
    const cookies = JSON.parse(localStorage.getItem('cookies'))
    if (cookies) {
      const expires = Date.parse(cookies.expires)
      console.log('expires: ', expires, 'now: ', Date.now())
      if (expires > Date.now()) {
        return [true, isSeller]
      } else return [false, false]
    } else return [false, false]
  }

  [mainStore.isLoggedIn, mainStore.isSeller] = checkAuth();

  const AuthButton = () => {
    if (mainStore.isLoggedIn === false) {
      return <TouchableOpacity onPress={() => history.push('/login')} style={styles.navButton}>
        <Image
          style={styles.navButtonImage}
          source={require('@foodtruckmap/common/src/static/icon_processed/noun_User_1485759.png')}
        />
        <Text style={styles.navButtonText}>Login</Text>
      </TouchableOpacity>
    } else {
      return <TouchableOpacity onPress={() => history.push('/mypage')} style={styles.navButton}>
      <Image
        style={styles.navButtonImage}
        source={require('@foodtruckmap/common/src/static/icon_processed/noun_User_1485759.png')}
      />
      <Text style={styles.navButtonText}>Mypage</Text>
    </TouchableOpacity>
    }
  }

  mainStore.footerHeight = 80;

  return (
    <View style={[styles.footer]}>
      <TouchableOpacity onPress={() => history.replace('/')} style={styles.navButton}>
        <Image
          style={styles.navButtonImage}
          source={require('@foodtruckmap/common/src/static/icon_processed/noun_main_1902023.png')}
        />
        <Text style={styles.navButtonText}>Main</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => history.push('/map')} style={styles.navButton}>
        <Image
          style={styles.navButtonImage}
          source={require('@foodtruckmap/common/src/static/icon_processed/noun_Map_1485766.png')}
          />
        <Text style={styles.navButtonText}>Map</Text>
      </TouchableOpacity>
      {AuthButton()}
    </View>
  )
})

const localStyle = StyleSheet.create({
  footer: {
    position: 'absolute',
    height: 80,
    paddingBottom: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: `rgba(${COLOR_HEADER},0.5)`,
    flexDirection: 'row'
  },
  navButton: {
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 1,
    flexDirection: "column",
    paddingTop: 5,
    paddingBottom: 10
  },
  navButtonImage: {
    tintColor: '#303030',
    height: 35,
    width: 35,
    resizeMode: 'cover',
    overflow: 'hidden',
    marginBottom: -5
  },
  navButtonText: {
    fontWeight: '600',
    fontSize: 14,
    color: '#505050'
  }
});

const styles = { ...CustomStyle, ...localStyle }