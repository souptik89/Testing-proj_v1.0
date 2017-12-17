import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, App, LoadingController } from 'ionic-angular';


@Component({
  selector: 'page-nav-popover-1',
  templateUrl: 'nav-popover-1.html',
})
export class NavPopover_1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavPopover_1Page');
  }

}
