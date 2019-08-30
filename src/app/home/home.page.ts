import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title : String;
  constructor(public nav : NavController) {
    
  }

  pushPage(){
    this.nav.navigateForward(`/filmsbygenre/${this.title}`);
  }
}
