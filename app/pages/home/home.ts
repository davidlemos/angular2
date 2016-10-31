import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {Network} from "ionic-native";
import {TabsPage} from '../tabs/tabs';



@Component({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {

    constructor(private navController: NavController) {
    }

    entrar() {  
        this.navController.setRoot(TabsPage);
    }

}
