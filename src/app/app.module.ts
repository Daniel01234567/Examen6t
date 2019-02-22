import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Tabs } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {HttpClientModule} from '@angular/common/http'
import { MascotasPage } from '../pages/mascotas/mascotas';
import { ComputadorasPage } from '../pages/computadoras/computadoras';
import { VideojuegosPage } from '../pages/videojuegos/videojuegos';
import { TabsPage } from '../pages/tabs/tabs';
import { CmpsPage } from '../pages/cmps/cmps';
import { VidPage } from '../pages/vid/vid';
import { FavoritosProvider } from '../providers/favoritos/favoritos';
import { BuscarPage } from '../pages/buscar/buscar';
import { FavoritosPage } from '../pages/favoritos/favoritos';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MascotasPage,
    ComputadorasPage,
    VideojuegosPage,
    TabsPage,
    CmpsPage,
    VidPage,
    BuscarPage,
    FavoritosProvider,
    FavoritosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MascotasPage,
    ComputadorasPage,
    VideojuegosPage,
    TabsPage,
    CmpsPage,
    VidPage,
    BuscarPage,
    FavoritosProvider,
    FavoritosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FavoritosProvider
  ]
})
export class AppModule {}
