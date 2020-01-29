import React, { Component, useContext } from 'react';
import { NaverMap, Marker } from 'react-naver-maps';
import { observer } from 'mobx-react-lite';
import { mainStoreContext } from '../store/MainStore';
import { MapStoreContext } from '../store/MapStore';
import axios from 'axios';

export const Maps = observer(() => {
  const mainStore = useContext(mainStoreContext);
  const mapStore = useContext(MapStoreContext);

  /*1. 내 위치를 받는 메소드
    2. 백엔드로부터 푸드트럭 데이터를 받아오는 메소드
    3. 지도 위에 마커를 그리는 메소드(내 위치를 기반하여 마커를 띄워주는 것으로 확장 필요)
  */

  const getMyLocation = () => {
    if (navigator.geolocation) { // GPS를 지원하면
      navigator.geolocation.getCurrentPosition(function(position) {
        alert(position.coords.latitude + ' ' + position.coords.longitude);
        mapStore.userLatitude = position.coords.latitude;
        mapStore.userLongitude = position.coords.longitude;
        
        console.log(mapStore.userLatitude + ", " + mapStore.userLongitude)
        naver.maps.panTo()
        // var latlng = new naver.maps.LatLng(position.coords.latitude, position.coords.longitude);
    
        // var map_options = {
        //     center:latlng,
        //     zoom:14,
        // }
        
        // var map = new naver.maps.Map('map', map_options);
        
        // var marker = new naver.maps.Marker({position:latlng,map:map,title:"You are here!"});


      }, function(error) {
        console.error(error);
      }, {
        enableHighAccuracy: false,
        maximumAge: 0,
        timeout: Infinity
      });
    } else {
      alert('GPS를 지원하지 않습니다');
    }
  }

  const getTrucksLocationInfo = () => {
    
  }

  const panToNaver = (latitude, longitude) => {
    mapStore.center.lat = latitude;
    mapStore.center.lng = longitude;
    console.log(mapStore.center.lat + ", " + mapStore.center.lng)
  }

  const panToLocation = (latitude, longitude) => {
  }

  return (
      <div>
        <button onClick={() => getMyLocation()}> 내 위치가 어디니??</button>
        <button onClick={() => panToNaver(37.36, 127.105399)}>Pan To Naver</button>
        <p>lat: {mapStore.center.y || mapStore.center.lat}</p>
        <p>lng: {mapStore.center.x || mapStore.center.lng}</p>
        <NaverMap 
          id='maps-getting-started-controlled' 
          style={{width: '100%', height: '400px'}}
          defaultCenter={new naver.maps.LatLng(37.3595704, 127.105399)} //지도의 초기 중심 좌표
          defaultZoom={14} //지도의 초기 줌 레벨

          center={ mapStore.center }
          // onCenterChanged={() => naver.maps.Map.panTo(new naver.maps.LatLng(mapStore.center.lat, mapStore.center.lng))}

        />
      </div>
  )
})