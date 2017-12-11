import { CameraPage } from './../pages/camera/camera';
import { TarefasListPage } from '../pages/tarefas-list/tarefas-list';
import { TarefasAddPage } from './../pages/tarefas-add/tarefas-add';
import { TarefaListItemComponent } from './../components/tarefa-list-item/tarefa-list-item';
import { HttpModule } from '@angular/http';
import { RegistrarPage } from '../pages/registrar/registrar';
import { LoginProvider } from './../providers/login/login';
import { FeedPage } from './../pages/feed/feed';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntroPage } from '../pages/intro/intro';
import { LoginPage } from '../pages/login/login';
import firebase from 'firebase';
import { TarefaProvider } from '../providers/tarefa/tarefa';
import { LovProvider } from '../providers/lov/lov';
import { Camera } from '@ionic-native/camera';


const firebaseConfig = {
    apiKey: "AIzaSyBXJAdwvnA1IfUyJgqx7rzJ40jwqZfTiec",
    authDomain: "pii-plataforma-de-imagens.firebaseapp.com",
    databaseURL: "https://pii-plataforma-de-imagens.firebaseio.com",
    projectId: "pii-plataforma-de-imagens",
    storageBucket: "pii-plataforma-de-imagens.appspot.com",
    messagingSenderId: "836958557861"
};
@NgModule({
  declarations: [
    MyApp,
    IntroPage,
    TabsPage,
    LoginPage,
    FeedPage,
    HomePage,
   RegistrarPage,
   TarefaListItemComponent,
   TarefasAddPage,
   TarefasListPage,
   CameraPage


  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)


  ],
  bootstrap: [IonicApp],
  entryComponents: [
     MyApp,
    IntroPage,
    TabsPage,
    LoginPage,
    FeedPage,
    HomePage,
    RegistrarPage,
    TarefaListItemComponent,
    TarefasAddPage,
    TarefasListPage,
    CameraPage
  ],
  providers: [
    LoginProvider,
   StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TarefaProvider,
    LovProvider



  ]
})
export class AppModule {
 constructor(){

  firebase.initializeApp(firebaseConfig );
}
}
