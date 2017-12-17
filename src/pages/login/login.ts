import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';




@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  show: boolean;
  txtval: any = 'register now';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.show = false;
    this.txtval = 'register now';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  gotohome() {
    this.navCtrl.setRoot(HomePage);
  }
  registration() {
    if (this.show) {
      this.show = false;
      this.txtval = 'register now';
    }
    else {
      this.show = true;
      this.txtval = 'login';
    }
  }
}