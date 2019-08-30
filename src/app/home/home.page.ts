import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title : String;
  constructor(public nav : NavController,private statusBar: StatusBar) {
    
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.statusBar.overlaysWebView(true);
  }

  pushPage(){
    this.nav.navigateForward(`/filmsbygenre/${this.title}`);
  }
}
