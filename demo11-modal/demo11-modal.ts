import { Component } from '@angular/core';
import {ModalController,
   IonicPage, NavController, NavParams }
    from 'ionic-angular';
import {LoginComponent} 
  from './login.component'

/**
 * Generated class for the Demo11ModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-demo11-modal',
  templateUrl: 'demo11-modal.html',
})
export class Demo11ModalPage {

  constructor(
    public myModalCtrl:ModalController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo11ModalPage');
  }

  //显示一个自定义的模态窗
  showMyModal(){
    // create方法要去指定的
    //第一个参数不再是一个配置对象
    //是要显示出来的组件
    let myModal = this.myModalCtrl
      .create(LoginComponent);
    myModal.present();
  }

}
