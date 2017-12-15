import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo11ModalPage } from './demo11-modal';

@NgModule({
  declarations: [
    Demo11ModalPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo11ModalPage),
  ],
  exports: [
    Demo11ModalPage
  ]
})
export class Demo11ModalPageModule {}
