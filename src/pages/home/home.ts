import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpClient} from '@angular/common/http'
import { MascotasPage } from '../mascotas/mascotas';
import { FavoritosPage } from '../favoritos/favoritos';
import { BuscarPage } from '../buscar/buscar';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  mascotas = [];
  ver=MascotasPage
  busc=BuscarPage;
favoritosP=FavoritosPage;
  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.http.get('/v1/nga/api/v1/public/klfst?&category=4020&offset=1&lim=29&lang=es')
      .subscribe(data => {
        if (data.hasOwnProperty('list_ads')) {


          this.mascotas = data['list_ads'];
          console.log(this.mascotas);
        }

      }, error => {
        console.log(JSON.stringify(error));
      });
}

verMascota(mascota){
  this.navCtrl.push(this.ver, {mascota: mascota});
}

buscar(){
  this.navCtrl.push(this.busc, {producto:this.mascotas});
}
favoritos(){
  this.navCtrl.push(this.favoritosP);
}
}
