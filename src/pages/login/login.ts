import { Component, ViewChild } from '@angular/core';
import { ToastController, Platform, NavController, ViewController, IonicPage } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
// import { LoggedinPage} from '../loggedin/loggedin';
import { AlertService } from '../shared/alert';
// import { CameraPage } from "../camera/camera";
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

import { FingerprintAIO, FingerprintOptions } from '@ionic-native/fingerprint-aio';

// declare var firebase;

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('username') uname;
  @ViewChild('password') password;

  fingerprintOpts: FingerprintOptions;

  constructor(private platform: Platform, private fingerprint: FingerprintAIO,
    private view: ViewController, private alert: AlertService,
    private fire: AngularFireAuth, public navCtrl: NavController,    
    private toast: ToastController) {
    this.fingerprintOpts = {
      clientId: 'fingerprint-demo',
      clientSecret: 'password',
      disableBackup: true
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async showFingerprintDialog() {
    try {
      await this.platform.ready();
      const available = await this.fingerprint.isAvailable();
      console.log(available);
      if (available === 'OK') {
        const result = await this.fingerprint.show(this.fingerprintOpts);
        console.log(result);
      }
    }
    catch (e) {
      console.log(e);
    }
  }

  closeModal() {
    this.view.dismiss();
  }

  signInUser() {
    this.fire.auth.signInWithEmailAndPassword(this.uname.value, this.password.value)
      .then(data => {        
        // firebase will automatically log you in if authorized
        this.alert.alert(`${this.fire.auth.currentUser.email} is logged in`);
        // this.navCtrl.setRoot( LoggedinPage);
        this.navCtrl.push('CameraPage');
      })
      .catch(err => {
        console.log(`login failed ${err.message}`);
      })
      this.toast.create({message: `failed to log on`});
  }
}

