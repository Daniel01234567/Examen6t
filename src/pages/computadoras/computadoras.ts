import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http'

/**
 * Generated class for the ComputadorasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-computadoras',
  templateUrl: 'computadoras.html',
})
export class ComputadorasPage {

  compu={}
  imgs=[];
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.compu=this.navParams.get('compu');
  

    if(this.compu.ad.hasOwnProperty('images')){
      this.imgs=this.compu.ad.images;
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ComputadorasPage');
  }



}
