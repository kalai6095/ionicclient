import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpcPage } from './spc';

@NgModule({
  declarations: [
    SpcPage,
  ],
  imports: [
    IonicPageModule.forChild(SpcPage),
  ],exports:[
    SpcPage
  ]
})
export class SpcPageModule {}
