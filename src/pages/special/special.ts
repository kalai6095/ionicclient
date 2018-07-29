import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HTTP} from "@ionic-native/http";

/**
 * Generated class for the SpecialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-special',
  templateUrl: 'special.html',
})
export class SpecialPage {

  private bearlist: any;
  private list:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HTTP) {
    this.getBeersDetails();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpecialPage');
  }

  getBeersDetails() {
    alert()
    let t=[
      {id:1},
      {id:2},
      {id:3}
    ];
    this.list=t;
    this.http.get('http://localhost:8084/list/bears', {}, {})
      .then(data => {
        this.bearlist = data.data;
        console.log(data.status);
        console.log(data.data); // data received by server
        console.log(data.headers);

      })
      .catch(error => {
console.log(error)
        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

      });
  }
}
