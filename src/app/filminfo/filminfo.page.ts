import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { films } from '../films.interface';
import { DomSanitizer , SafeUrl} from '@angular/platform-browser';


@Component({
  selector: 'app-filminfo',
  templateUrl: './filminfo.page.html',
  styleUrls: ['./filminfo.page.scss'],
})
export class FilminfoPage implements OnInit {
  id : any ;
  data : films;
  link : SafeUrl;
  constructor(private activatedRoute: ActivatedRoute , public dom : DomSanitizer) {
    /*let descp =this.activatedRoute.snapshot.paramMap.get("desc") ; 
    let namep =this.activatedRoute.snapshot.paramMap.get("name"); 
    let thumbp=this.activatedRoute.snapshot.paramMap.get("thumb") ;
    let timep =this.activatedRoute.snapshot.paramMap.get("time");
    let videop =this.activatedRoute.snapshot.paramMap.get("video");
    this.data.desc=descp;
    this.data.name=namep;
    this.data.thumb=thumbp;
    this.data.time=timep;
    this.data.video=videop;
    console.log(this.data);*/
    let dataS = this.activatedRoute.snapshot.paramMap.get("infos");
    this.data = JSON.parse(dataS);
    console.log(this.data.video);
    this.link=this.dom.bypassSecurityTrustResourceUrl(this.data.video);
  }
  ngOnInit() {
  }

}
