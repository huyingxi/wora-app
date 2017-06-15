import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})

export class DetailPage {
  contents : Object[] = [];
  film: any
  content : any

  article:any


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {
  }

  ngOnInit() {
    this.film = this.navParams.get('film')
    this.film.description = this.film.description.replace(/src="/g, 'src="https://bbs.byr.cn')



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
