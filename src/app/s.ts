import { HttpModule } from '@angular/http';
import { RegistrarPage } from '../pages/registrar/registrar';
import { LoginProvider } from './../providers/login/login';
import { FeedPage } from './../pages/feed/feed';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntroPage } from '../pages/intro/intro';
import { LoginPage } from '../pages/login/login';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC2vagUlvhp8tzDPFbY7AWfpCAq1NPRvhA",
  authDomain: "cursoionic2-e3bc7.firebaseapp.com",
  databaseURL: "https://cursoionic2-e3bc7.firebaseio.com",
  projectId: "cursoionic2-e3bc7",
  storageBucket: "cursoionic2-e3bc7.appspot.com",
  messagingSenderId: "961585959863"
};

@NgModule({
  declarations: [
    MyApp,
    IntroPage,
    LoginPage,
    FeedPage,
    HomePage,
     RegistrarPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
     MyApp,
    IntroPage,
    LoginPage,
    FeedPage,
    HomePage,
    RegistrarPage
  ],
  providers: [
    LoginProvider,
   StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},


  ]
})
export class AppModule {
 constructor(){

 firebase.initializeApp(firebaseConfig);
}
}
