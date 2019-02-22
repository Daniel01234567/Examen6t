import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComputadorasPage } from '../computadoras/computadoras';
import {HttpClient} from '@angular/common/http'

/**
 * Generated class for the CmpsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cmps',
  templateUrl: 'cmps.html',
})
export class CmpsPage {
  compus=[];
  compu=ComputadorasPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.http.get('/v1/nga/api/v1/public/klfst?&category=5020&offset=1&lim=29&lang=es')
    .subscribe (data=>{
      if (data.hasOwnProperty('list_ads')){
        this.compus=data.list_ads;
    }},
    error=>
    {
      console.log(JSON.stringify(error));
    });
    }
  
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad CmpsPage');
  }
  verCompu(compu){
    this.navCtrl.push(this.compu,{compu:compu});
  }

}
