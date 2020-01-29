import React, { Component, useContext } from 'react';
import { NaverMap, Marker } from 'react-naver-maps';
import { observer } from 'mobx-react-lite';
import { mainStoreContext } from '../store/MainStore';
import { MapStoreContext } from '../store/MapStore';

export const Maps = observer(() => {
  const mainStore = useContext(mainStoreContext);
  const mapStore = useContext(MapStoreContext);

  /*1. 내 위치를 받는 메소드
    2. 백엔드로부터 푸드트럭 데이터를 받아오는 메소드
    3. 지도 위에 마커를 그리는 메소드(내 위치를 기반하여 마커를 띄워주는 것으로 확장 필요)
  */

  const dummy = [
    {
        "id": 1,
        "title": "title",
        "contents": "cpnmt",
        "imgURL": "https://avatars2.githubusercontent.com/u/22673963?s=400&v=4",
        "latitude": 37.123,
        "longitude": 125.12312,
        "distance": "11 m"
    },
    {
        "id": 2,
        "title": "dduckbokki",
        "contents": "아주아주아주아주~매워!",
        "imgURL": "https://avatars2.githubusercontent.com/u/22673963?s=400&v=4",
        "latitude": 37.5005,
        "longitude": 127.037,
        "distance": "12727 km"
    }
];

  const getMyLocation = () => {
    if (navigator.geolocation) { // GPS를 지원하면
      navigator.geolocation.getCurrentPosition(function(position) {
        alert(position.coords.latitude + ' ' + position.coords.longitude);
        mapStore.userLatitude = position.coords.latitude;
        mapStore.userLongitude = position.coords.longitude;
        
        console.log(mapStore.userLatitude + ", " + mapStore.userLongitude)
        naver.maps.panTo()
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

  const make_markers = dummy.map((element, index) => {
    return <Marker key={index}
        position={{lat:element.latitude, lng:element.longitude}}
      />
  })

  const panToNaver = (latitude, longitude) => {
    mapStore.center = {lat: latitude, lng: longitude};
    console.log(mapStore.center.lat + ", " + mapStore.center.lng)
  }

  return (
      <div>
        <button onClick={() => getMyLocation()}> 내 위치가 어디니??</button>
        <button onClick={() => panToNaver(37.36, 127.105399)}>Pan To Naver</button>
        <p>lat: {mapStore.center.lat}</p>
        <p>lng: {mapStore.center.lng}</p>
        <NaverMap
          id='naverMap' 
          style={{width: '100%', height: '400px'}}
          defaultCenter={new naver.maps.LatLng(37.3595704, 127.105399)} //지도의 초기 중심 좌표
          defaultZoom={14} //지도의 초기 줌 레벨
          center={ mapStore.center } >
          { make_markers }
        </NaverMap>
      </div>
  )
})