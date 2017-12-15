// a-component
import { Component, OnInit } from '@angular/core';
import { ViewController} 
from 'ionic-angular'

@Component({
    selector: 'myLogin',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    constructor(
        public myViewCtrl:ViewController) { }

    ngOnInit() { }

    //关闭模态窗
    closeModal(){
        //如何来读取demo11ModalPage类中
        //的myModal中的dismiss呢？        
        console.log(this.myViewCtrl);
        this.myViewCtrl.dismiss();
    }
}