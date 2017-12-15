import { Component } from '@angular/core';
import { LoadingController,
  IonicPage, NavController, NavParams } 
  from 'ionic-angular';

/**
 * Generated class for the Demo10LoadPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-demo10-load',
  templateUrl: 'demo10-load.html',
})
export class Demo10LoadPage {

  constructor(
    public myLoadCtrl:LoadingController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo10LoadPage');
  }

  //显示一个加载中的窗口
  showLoading(){
    let myLoading = 
      this.myLoadCtrl.create(
        {
          content:'正在刷新数据',
          // duration:3000
        }
      );
    myLoading.present();

    // 4s延迟之后，手工关掉加载中的窗口
    setTimeout(
      ()=>{
        myLoading.dismiss();
      },
      4000
    )

  }

}
