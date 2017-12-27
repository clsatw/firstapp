import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import { Network } from '@ionic-native/network';
import { ToastController } from 'ionic-angular';
/*
  Generated class for the NetStatusProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class NetStatusProvider {

  constructor(private network: Network, public toastCtrl: ToastController) {
    console.log('Hello NetStatusProvider Provider');
  }

  displayNetworkUpdate(connectionState: string) {
    let networkType = this.network.type;
    this.toastCtrl.create({
      message: `You are now ${connectionState} via ${networkType}`,
      duration: 3000
    }).present();
  }

  onConnect() {
    return this.network.onConnect().subscribe(data => {
      console.log(data);
      this.displayNetworkUpdate(data.type);
    }, err => console.error(err));
  }

  onDisconnect() {
    return this.network.onDisconnect().subscribe(data => {
      console.log(data);
      this.displayNetworkUpdate(data.type);
    }, err => console.error(err))
  }
}
