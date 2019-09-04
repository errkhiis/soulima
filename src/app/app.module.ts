import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {VideoPlayer} from '@ionic-native/video-player/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {AngularFirestoreModule} from '@angular/fire/firestore'
import {AngularFireModule} from '@angular/fire'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { from } from 'rxjs';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,AngularFirestoreModule,AngularFireModule.initializeApp({
    
      apiKey: "AIzaSyDtxNNUwvVfw6oN40aJK8KbkaP4chUd6fY",
      authDomain: "soulima-6a190.firebaseapp.com",
      databaseURL: "https://soulima-6a190.firebaseio.com",
      projectId: "soulima-6a190",
      storageBucket: "soulima-6a190.appspot.com",
      messagingSenderId: "76912271080",
      appId: "1:76912271080:web:29bd53e17e23f8b0"
    
  })],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    VideoPlayer
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
