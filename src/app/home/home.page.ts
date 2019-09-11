import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title : String;
  Result = [];
  constructor(public nav : NavController,private statusBar: StatusBar , private fs : AngularFirestore) {
    
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //this.statusBar.overlaysWebView(true);
    this.statusBar.hide()
  }

  pushPage(){
    this.nav.navigateForward(`/filmsbygenre/${this.title}`);
  }

  search(event){
    let term = event.target.value ;
    
  }
}
