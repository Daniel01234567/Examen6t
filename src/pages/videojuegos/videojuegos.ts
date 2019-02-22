import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VidPage } from '../vid/vid';
import {HttpClient} from '@angular/common/http'

/**
 * Generated class for the VideojuegosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-videojuegos',
  templateUrl: 'videojuegos.html',
})
export class VideojuegosPage {
  juegos=[];
  Juego=VidPage;


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.http.get('/v1/nga/api/v1/public/klfst?&category=5060&offset=1&lim=29&lang=es')
  .subscribe (data=>{
   if (data.hasOwnProperty('list_ads')){
     this.juegos=data.list_ads;
   }
  },
  error=> {
    console.log(JSON.stringify(error));
  });
}
ionViewDidLoad() {
  console.log('ionViewDidLoad Videojuegospage');
}

  verVideo(juego){
    this.navCtrl.push(this.Juego,{juego:juego});
    }

}
