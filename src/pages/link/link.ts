import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-link',
  templateUrl: 'link.html',
})

export class LinkPage {


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {
  }

  ngOnInit() {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
