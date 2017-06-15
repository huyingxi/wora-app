import { Component } from '@angular/core';

import { LinkPage } from '../link/link';
import {ToptenPage} from "../topten/topten";
import {ArticlePage} from "../article/article";
import {ActivityPage} from "../activity/activity";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ToptenPage;
  tab2Root = ActivityPage;
  tab3Root = ArticlePage;
  tab4Root = LinkPage;
  constructor() {

  }
}
