import {Component, ViewChild} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';


/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {


  @ViewChild('email') email;
  @ViewChild('password') password;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  showAlert(title: string, msg: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }


  register() {
    if (this.email.value == undefined || this.email.value == "" || this.email.value == null) {
      this.showAlert("Error", "Please enter email");
    } else if (this.password.value == undefined || this.password.value == "" || this.password.value == null) {
      this.showAlert("Error", "Please enter password");
    } else {
      this.showAlert('Info', 'Registration Success');
      this.navCtrl.pop();
    }
  }

}
