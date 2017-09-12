import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Injectable()
export class AlertService {

    constructor(public alertCtrl: AlertController) { }
    alert(msg: string, intend?) {
        this.alertCtrl.create({
          title: 'Info',
          subTitle: msg,
          buttons: [
            {
              text: 'Yes',
              handler: intend
            },
            {
              text: 'No',
              handler: ()=>{
                // do nothing
              }
            }        
          ]
        }).present();
      }
}