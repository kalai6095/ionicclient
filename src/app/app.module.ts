import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {HTTP} from "@ionic-native/http";

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {SignupPage} from "../pages/signup/signup";
import {LoginPage} from "../pages/login/login";
import {SpcPage} from "../pages/spc/spc";

import {MenuPage} from "../pages/menu/menu";
import {Menu1Page} from "../pages/menu1/menu1";
import {Menu2Page} from "../pages/menu2/menu2";

import {AboutPage} from "../pages/about/about";
import {ContactPage} from "../pages/contact/contact";

@NgModule({
  declarations: [
    MyApp,
    HomePage, LoginPage, SignupPage, MenuPage, Menu1Page, Menu2Page, SpcPage, AboutPage, ContactPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, LoginPage, SignupPage, MenuPage, Menu1Page, Menu2Page, SpcPage, AboutPage, ContactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
