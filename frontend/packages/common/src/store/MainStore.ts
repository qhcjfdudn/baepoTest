import { observable } from 'mobx';
import { createContext } from 'react';

class MainStore {
  // global setting
  @observable DEVELOP: boolean = true;

  @observable screenWidth: number = 0;
  @observable screenHeight: number = 0;
  @observable footerHeight: number = 0;
  @observable headerHeight: number = 0;
  @observable scrollviewHeight: number = 0;

  // userinfo
  @observable isLoggedIn: boolean = false;
  @observable isSeller: boolean = false;
  @observable sellerTruckId: number = 0;

  // bannerinfo
  @observable bannerPage: number = 1;
  @observable bannerTotal: number = 1;
  @observable bannerCountOpacity: number = 1;

  // test
  @observable count = 0;
  @observable testCurrentLocation: any;
}

export const mainStoreContext = createContext(new MainStore());