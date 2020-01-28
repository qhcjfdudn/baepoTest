import React, { Component } from 'react';
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps';
import { decorate, observable, action } from 'mobx';
import { observer } from 'mobx-react';
import axios from 'axios';

@observer
class Maps extends Component {
  @observable state = {
    center: {
      // 내 위치로 변경 필요. 어떻게 받아와야 할까?
      lat: 37.3595704,
      lng: 127.105399
    }
  }

  /*1. 내 위치를 받는 메소드
    2. 백엔드로부터 푸드트럭 데이터를 받아오는 메소드
    3. 지도 위에 마커를 그리는 메소드(내 위치를 기반하여 마커를 띄워주는 것으로 확장 필요)
  */

  @action getTrucksLocationInfo() {
    

  }

  @action panToNaver(latitude, longitude) {
    this.setState({ center: { lat: latitude, lng: longitude }})
  }

  render() {
    return (
      <div>
        <button onClick={() => this.panToNaver(37.36, 127.105399)}>Pan To Naver</button>
        <p>lat: {this.state.center.y || this.state.center.lat}</p>
        <p>lng: {this.state.center.x || this.state.center.lng}</p>
        <NaverMap 
          id='maps-getting-started-controlled' 
          style={{width: '100%', height: '400px'}}
          
          // uncontrolled zoom
          defaultZoom={10}

          // controlled center
          // Not defaultCenter={this.state.center}
          center={this.state.center}
          onCenterChanged={center => this.setState({ center })}
        />
      </div>
    )
  }
}

export default Maps;
