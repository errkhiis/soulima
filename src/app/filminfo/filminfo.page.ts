import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { films } from '../films.interface';
import { DomSanitizer , SafeUrl} from '@angular/platform-browser';

import { StatusBar } from '@ionic-native/status-bar/ngx'; 
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';


@Component({
  selector: 'app-filminfo',
  templateUrl: './filminfo.page.html',
  styleUrls: ['./filminfo.page.scss'],
})
export class FilminfoPage implements OnInit {
  id : any ;
  public data : films;
  link : SafeUrl;
  link2 : SafeUrl;
  link3 : SafeUrl;
  link4 : SafeUrl;
  constructor(private activatedRoute: ActivatedRoute , public dom : DomSanitizer , private strm : StreamingMedia ,private statusBar: StatusBar) {
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
    this.link=this.data.video;
    this.link2=this.data.video2;
    this.link3=this.data.video3;
    this.link4=this.data.video4;
  }
  
  openStrm(datain){
    this.strm.playVideo(datain);
  }
  openStrm2(datain2){
    this.strm.playVideo(datain2);
  }
  openStrm3(datain3){
    this.strm.playVideo(datain3);
  }
  openStrm4(datain4){
    this.strm.playVideo(datain4);
  }
  ngOnInit(){
    this.statusBar.hide();
  }

}
