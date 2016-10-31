import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {enableProdMode} from '@angular/core';
import {HomePage} from './pages/home/home';
import {AlbumService} from './services/albumService';
import {UtilService} from './services/utilService';

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {

  private rootPage:any;

  constructor(private platform:Platform) {
  this.rootPage = HomePage;
  
    platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }
}
enableProdMode();

ionicBootstrap(MyApp,[AlbumService,UtilService])
