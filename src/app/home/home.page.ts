import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title : String;
  Result = [];
  constructor(public nav : NavController,private statusBar: StatusBar , private fs : AngularFirestore , public alertController: AlertController) {
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'MoviesTea',
      animated : true ,
      mode : 'ios' ,
      subHeader: 'Created by : @errkhiis-company',
      message: "If you don't find your movie , you can demand it to our team by sending mail to moviestea2020@gmail.com , or by joining to our facebook's group @MoviesTea",
      buttons: ['OK']
    });

    await alert.present();
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
