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

import {StreamingMedia} from '@ionic-native/streaming-media/ngx'
import { firebaseConfig } from './db';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,AngularFirestoreModule,AngularFireModule.initializeApp(firebaseConfig)],
  providers: [
    StreamingMedia,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    VideoPlayer
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
