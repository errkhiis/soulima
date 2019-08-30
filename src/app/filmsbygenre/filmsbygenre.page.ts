import { Component, OnInit } from '@angular/core';
import { HomePage } from '../home/home.page';
import { Title } from '@angular/platform-browser';
import { NavController, NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filmsbygenre',
  templateUrl: './filmsbygenre.page.html',
  styleUrls: ['./filmsbygenre.page.scss'],
})
export class FilmsbygenrePage implements OnInit {
  title : String;
  constructor(private activatedRoute: ActivatedRoute) { 
   }

  ngOnInit() {
    this.title = this.activatedRoute.snapshot.paramMap.get('myid');
  }

}
