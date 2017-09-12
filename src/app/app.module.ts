import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import firebase from 'firebase';
// import { Geolocation } from '@ionic-native/geolocation';
// import { GooglePlus } from '@ionic-native/google-plus';
import { Camera } from '@ionic-native/camera';
import {FingerprintAIO} from '@ionic-native/fingerprint-aio';
import { TextToSpeech } from '@ionic-native/text-to-speech'

import { MyApp } from './app.component';

import { AlertService } from "../pages/shared/alert";

// with lazy loading used, no import of page's modules and components is reuqired. 

import { FormValidationService } from "../pages/product/shared/form-validation.service";
import { ProdService } from "../pages/product/prod.service";
import { BackgroundMode } from "@ionic-native/background-mode";
// import { GoogleMaps } from "@ionic-native/google-maps";

export const firebaseAuth = {
  apiKey: "AIzaSyCzBCvoW2D-o4hLSimT5N3TXSWtkPRF3ls",
  authDomain: "test-project-c160b.firebaseapp.com",
  databaseURL: "https://test-project-c160b.firebaseio.com",
  projectId: "test-project-c160b",
  storageBucket: "test-project-c160b.appspot.com",
  messagingSenderId: "558571822265"
};
firebase.initializeApp(firebaseAuth);

@NgModule({
  declarations: [
    MyApp,
    // with lazy loading used, no pages declaration is reuqired. 
  ],
  imports: [
    // with lazy loading used, no import of page's Modules is reuqired.    
    BrowserModule,
    HttpModule,    
    IonicModule.forRoot(MyApp, {
      preloadModules: true
    }),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // with lazy loading used, no pages declaration is reuqired.    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    // Geolocation,
    // GoogleMaps,
    AlertService,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    FormValidationService,
    ProdService,  
    FingerprintAIO,
    TextToSpeech,
    BackgroundMode
    // GooglePlus

  ]
})
export class AppModule { }
