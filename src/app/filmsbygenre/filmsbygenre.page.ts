import { Component, OnInit, CollectionChangeRecord, getDebugNode } from '@angular/core';
import { HomePage } from '../home/home.page';
import { Title } from '@angular/platform-browser';
import { NavController, NavParams, AngularDelegate } from '@ionic/angular';
import { ActivatedRoute, Route, Router } from '@angular/router';
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
  public collect: films[] = [];
  public fd: films[] = [];
  data: films = {};

  constructor(private activatedRoute: ActivatedRoute, private statusBar: StatusBar,
    private fs: AngularFirestore, public nav: NavController) {
    this.title = this.activatedRoute.snapshot.paramMap.get('myid');
    this.statusBar.overlaysWebView(true);
    this.statusBar.styleBlackTranslucent();
  }

  getAllfilms() {
    return this.fs.collection("/films/" + this.title + "/films").valueChanges()
  }

  onClick(id) {
    this.data = this.collect[0];
    let dataString = encodeURIComponent(JSON.stringify(this.data));
    this.nav.navigateForward(`/filminfo/${dataString}`);
    console.log(dataString);
  }

  ngOnInit() {
    this.getAllfilms().subscribe(
      data => {
        this.collect = data;
        this.fd = data;
      }

    );

  }

  ionViewDidEnter() {
  }

  search($event) {
    let term = $event.target.value;
    if (term == "") {
      this.fd = this.collect.filter((f => {
        return term.toLowerCase().indexOf(f.name.toLowerCase()) ;
      }));
    } else {
      this.fd = this.collect.filter((f => {
        //return term.toLowerCase().indexOf(f.name.toLowerCase()) > -1;
        return f.name.toLocaleLowerCase().includes(term.toLocaleLowerCase());
      }));
    }
  }
}
