import { Component } from '@angular/core';
import { ModalController, Modal, ModalOptions, NavController, App, IonicPage } from 'ionic-angular';

// import { AngularFireModule} from 'angularfire2';
import { AngularFireAuth } from "angularfire2/auth";
//import { GooglePlus} from '@ionic-native/google-plus';
import firebase from 'firebase';

// import { LoginPage } from "../login/login";
// import { RegisterPage } from "../register/register";
// import { CameraPage } from '../camera/camera';
@IonicPage()
@Component({
  selector: 'page-social-login',
  templateUrl: 'social-login.html'
})
export class SocialLoginPage {
  modalOPtions: ModalOptions = {
    showBackdrop: false,
    enableBackdropDismiss: false,    
    // enterAnimation: true
  }

  provider = {
    loggedin: false,
    name: '',
    profilePix: '',
    email: ''
  }

  constructor(private modal: ModalController, private fire: AngularFireAuth, public navCtrl: NavController, public app: App) {

  }

  logIn() {    
    const loginModal: Modal = this.modal.create('LoginPage', {}, this.modalOPtions);
    loginModal.present();
    // you can pass data to the dest page in the 2nd param
    // this.navCtrl.push('LoginPage', {}, { animate: false });
  }

  register() {
    const registerModal = this.modal.create('RegisterPage', {}, this.modalOPtions);
    registerModal.present();
    // this.navCtrl.push('RegisterPage');
  }

  loginWithGoogle() {
    this.fire.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(res => {
        this.provider.name = res.user.displayName;
        this.provider.email = res.user.email;
        this.provider.profilePix = res.user.photoUrl;
        this.provider.loggedin = true;
        this.navCtrl.push('CameraPage');
        console.log('From -- Google');
        console.log(res);
      })
  }

  /*
  loginWithGoogle() {
    this.googleplus.login({
      'webClientId':"558571822265-rrevvjstu8uv1704qqfmq1i2lt8hfkqa.apps.googleusercontent.com",
      'offline': true
    }).then(res=>{
      firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
      .then(success=>{
        alert('LOGIN SUCCESS')
      }).catch(err=>{
        alert(`login failed: $(err}`)
      })
    })
  }
  */

  loginWithFb() {
    this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => {
        this.provider.name = res.user.displayName;
        this.provider.email = res.user.email;
        this.provider.profilePix = res.user.photoUrl;
        this.provider.loggedin = true;
        this.navCtrl.push('CameraPage');
        console.log('From -- Google');
        console.log(res);
      })
  }

  logout() {
    this.fire.auth.signOut();
    this.provider.loggedin = false;
    const root = this.app.getRootNav();
    root.popToRoot();
  }
}
