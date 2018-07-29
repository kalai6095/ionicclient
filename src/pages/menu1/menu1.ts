import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HTTP} from "@ionic-native/http";

/**
 * Generated class for the Menu1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu1',
  templateUrl: 'menu1.html',
})
export class Menu1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HTTP) {
    this.getBeerDetails();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Menu1Page');
  }


  getBeerDetails(){
    alert("hai");
  }
}
