import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http'

/**
 * Generated class for the VidPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vid',
  templateUrl: 'vid.html',
})
export class VidPage {
imgs=[];
juego={};
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.juego=this.navParams.get ('juego');
    
    if(this.juego.ad.hasOwnProperty('images')){
      this.imgs=this.juego.ad.images;
    }
  }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad VidPage');
    }
  
    }
  
  