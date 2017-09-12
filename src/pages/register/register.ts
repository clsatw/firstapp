import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ViewController, IonicPage } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// with lazy load applied, we always need ionicPage decorator although we use modal to load this page, 
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  @ViewChild('username') uname;
  @ViewChild('password') password;
  constructor(private view: ViewController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  closeModal() {
    this.view.dismiss();
  }

  registerUser(){
    this.fire.auth.createUserWithEmailAndPassword(this.uname.value, this.password.value)
    .then(data=>{
      console.log('got data ', data)
    })
    .catch(error=>{
      console.error(error);
    })

  }


}
