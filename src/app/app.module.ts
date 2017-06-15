import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { DetailPage } from '../pages/detail/detail';
import { LinkPage } from '../pages/link/link';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ToptenPage} from "../pages/topten/topten";
import {ArticlePage} from "../pages/article/article";
import {ActivityPage} from "../pages/activity/activity";

// import { HTTP } from '@ionic-native/http';

@NgModule({
  declarations: [
    MyApp,
    DetailPage,
    ToptenPage,
    LinkPage,
    ArticlePage,
    ActivityPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DetailPage,
    ToptenPage,
    LinkPage,
    ArticlePage,
    ActivityPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    // HTTP,
  ]
})
export class AppModule {}
