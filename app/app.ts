import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {enableProdMode} from '@angular/core';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {

  private rootPage:any;

  constructor(private platform:Platform) {
   // this.rootPage = TabsPage;

    platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }
}
enableProdMode();

ionicBootstrap(MyApp,[])
