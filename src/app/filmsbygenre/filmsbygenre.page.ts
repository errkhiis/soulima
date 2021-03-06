import { Component, OnInit, CollectionChangeRecord, getDebugNode } from '@angular/core';
import { NavController, NavParams, AngularDelegate } from '@ionic/angular';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {  AngularFirestore } from '@angular/fire/firestore';
import { films } from '../films.interface';

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
  term : string ;

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
    if(this.term == ""){
      this.data = this.collect[id];
      let dataString = encodeURIComponent(JSON.stringify(this.data));
      this.nav.navigateForward(`/filminfo/${dataString}`);
      console.log(id);
    }else{
      this.data = this.fd[id];
      let dataString = encodeURIComponent(JSON.stringify(this.data));
      this.nav.navigateForward(`/filminfo/${dataString}`);
      console.log(id);
    }

  }

  ngOnInit() {
    this.statusBar.hide();
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
    this.term = $event.target.value;
    if (this.term == "") {
      this.fd = this.collect.filter((f => {
        return this.term.toLowerCase().indexOf(f.name.toLowerCase()) ;
      }));
    } else {
      this.fd = this.collect.filter((f => {
        //return term.toLowerCase().indexOf(f.name.toLowerCase()) > -1;
        return f.name.toLocaleLowerCase().includes(this.term.toLocaleLowerCase());
      }));
    }
  }
}
