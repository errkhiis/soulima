import { Component, OnInit, CollectionChangeRecord, getDebugNode } from '@angular/core';
import { HomePage } from '../home/home.page';
import { Title } from '@angular/platform-browser';
import { NavController, NavParams, AngularDelegate } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { database } from 'firebase';
import * as firebase from 'firebase';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { films } from '../films.interface';
import { element } from 'protractor';

@Component({
  selector: 'app-filmsbygenre',
  templateUrl: './filmsbygenre.page.html',
  styleUrls: ['./filmsbygenre.page.scss'],
})
export class FilmsbygenrePage implements OnInit {
  title: string;
  public collect :films [] = [];
  constructor(private activatedRoute: ActivatedRoute, private statusBar: StatusBar,
    private fs : AngularFirestore) {
    this.title = this.activatedRoute.snapshot.paramMap.get('myid');
    this.statusBar.overlaysWebView(true);

  }

  getAllfilms(){
    return this.fs.collection("/films/"+this.title+"/films").valueChanges()
  }

  ngOnInit() {
    this.getAllfilms().subscribe(
      data=>this.collect=data,
    );
  }
}
