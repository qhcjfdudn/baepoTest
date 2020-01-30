import { observable } from 'mobx';
import { createContext } from 'react';

class MapStore {
  // user current pos
  @observable center = {
    lat: 37.3595704,
    lng: 127.105399
  }
  @observable.ref markers = [
  ]
  @observable.ref userCenter = {
  }
  @observable zoom = 14
  @observable bounds = {
  }
}

export const MapStoreContext = createContext(new MapStore());