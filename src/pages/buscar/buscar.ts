import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VidPage } from '../vid/vid';
import { VideojuegosPage } from '../videojuegos/videojuegos';
import { HomePage } from '../home/home';

/**
 * Generated class for the BuscarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html',
})
export class BuscarPage {

producto=[];
items=[];
mascota=HomePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.producto=this.navParams.get('producto');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscarPage');
  }
  getItems(ev:any){
    console.log(ev.target.value);
   this.items=this.producto.filter(juego => 
    {return juego.ad.subject.toLowerCase(). includes(ev.target.value.toLowerCase());
    }
    );
}
verMascota(item){
  this.navCtrl.push(this.mascota, {mascota:item});
}
