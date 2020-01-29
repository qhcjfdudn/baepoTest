import { observable } from 'mobx';
import { createContext } from 'react';

class MapStore {
  // user current pos
  @observable center = {
    lat: 37.3595704,
    lng: 127.105399
  }
  @observable userLatitude: number = 37.3595704;
  @observable userLongitude: number = 127.105399;
}

export const MapStoreContext = createContext(new MapStore());