import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo08ListPage } from './demo08-list';

@NgModule({
  declarations: [
    Demo08ListPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo08ListPage),
  ],
  exports: [
    Demo08ListPage
  ]
})
export class Demo08ListPageModule {}
