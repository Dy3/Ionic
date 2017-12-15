import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo09SlidesPage } from './demo09-slides';

@NgModule({
  declarations: [
    Demo09SlidesPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo09SlidesPage),
  ],
  exports: [
    Demo09SlidesPage
  ]
})
export class Demo09SlidesPageModule {}
