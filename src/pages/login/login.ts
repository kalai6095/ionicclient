import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';


import  {MenuPage} from "../menu/menu";
import {SignupPage} from "../signup/signup";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') uname;
  @ViewChild('password') password;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signUp() {
    this.navCtrl.push(SignupPage);
  }

  showAlert(title: string, msg: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }

  login() {
    /*if (this.uname.value == undefined || this.uname.value == "" || this.uname.value == null) {
      this.showAlert("Error", "Please enter username");
    } else if (this.password.value == undefined || this.password.value == "" || this.password.value == null) {
      this.showAlert("Error", "Please enter password");
    } else {
      if (this.uname.value == "kalai" && this.password.value == "kalai") {*/
        this.showAlert("Info", "Welcome " + this.uname.value);
        this.navCtrl.setRoot(MenuPage);
    /*  } else {
        this.showAlert("Login Failed", "User/Password wrong");
      }
    }*/
  }
}
