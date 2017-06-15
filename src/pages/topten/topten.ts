import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Http }     from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

 import { parseString } from 'xml2js'
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-topten',
  templateUrl: 'topten.html'
})
export class ToptenPage {
  // We proxied rssUrl to http://bbs.cloud.icybee.cn/rss/

  // for `ionic serve`
  // private readonly rssUrl = '/rss/board-Picture'

  // for `electron .`
  // private readonly rssUrl = 'http://bbs.cloud.icybee.cn/rss/board-Picture'

  films: Observable<any>;

  public posts: Object[] = []

  constructor(
    public http:    Http,
    public navCtrl: NavController,
  ) {

  }

  ngOnInit() {
    this.films = this.http.get('https://bbs.byr.cn/rss/topten')
      .map(res => {
        var tmp = null;
        console.dir(res.text())
        parseString(res.text(), {explicitArray : false}, function (err, result) {
          console.dir(err)
          console.dir(result)
          console.dir(JSON.stringify(result));
          tmp = result.rss.channel.item;
        });
        console.dir(tmp)
        return tmp;

      })
  }

  openDetails(film) {
    this.navCtrl.push(DetailPage, {film: film});
  }


}
