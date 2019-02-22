import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CmpsPage } from './cmps';

@NgModule({
  declarations: [
    CmpsPage,
  ],
  imports: [
    IonicPageModule.forChild(CmpsPage),
  ],
})
export class CmpsPageModule {}
