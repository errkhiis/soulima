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
    
    let dataS = this.activatedRoute.snapshot.paramMap.get("infos");
    this.data = JSON.parse(dataS);
    this.link=this.data.video;
    this.link2=this.data.video2;
    this.link3=this.data.video3;
    this.link4=this.data.video4;
  }
  
  openStrm(datain){
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Video played') },
      errorCallback: (e) => { console.log('Error streaming') },
      orientation: 'landscape',
      shouldAutoClose: false,
      controls: true
    };
    
    this.strm.playVideo(datain,options);
  }
  openStrm2(datain2){
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Video played') },
      errorCallback: (e) => { console.log('Error streaming') },
      orientation: 'landscape',
      shouldAutoClose: false,
      controls: true
    };
    
    this.strm.playVideo(datain2,options);
  }
  openStrm3(datain3){
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Video played') },
      errorCallback: (e) => { console.log('Error streaming') },
      orientation: 'landscape',
      shouldAutoClose: false,
      controls: true
    };
    
    this.strm.playVideo(datain3,options);
  }
  openStrm4(datain4){
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Video played') },
      errorCallback: (e) => { console.log('Error streaming') },
      orientation: 'landscape',
      shouldAutoClose: false,
      controls: true
    };
    
    this.strm.playVideo(datain4,options);
  }
  ngOnInit(){
    this.statusBar.hide();
  }

}
