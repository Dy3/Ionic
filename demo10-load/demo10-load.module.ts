import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo10LoadPage } from './demo10-load';

@NgModule({
  declarations: [
    Demo10LoadPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo10LoadPage),
  ],
  exports: [
    Demo10LoadPage
  ]
})
export class Demo10LoadPageModule {}
