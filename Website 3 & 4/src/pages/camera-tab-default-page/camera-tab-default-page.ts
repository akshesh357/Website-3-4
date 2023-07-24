import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-camera-tab-default-page',
  templateUrl: 'camera-tab-default-page.html'
})
export class CameraTabDefaultPagePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {

    console.log("hii");
  }
  
}
