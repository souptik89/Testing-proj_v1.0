import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { ParallaxHeader2Directive } from '../../directives/parallax-header2/parallax-header2';
import { NavPopover_1Page } from '../nav-popover-1/nav-popover-1';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {

  }

  TopPopover(myEvent) {

    let popover = this.popoverCtrl.create(NavPopover_1Page, {});
    popover.present({
      ev: myEvent
    });

  }

}
