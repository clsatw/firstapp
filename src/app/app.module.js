var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import firebase from 'firebase';
// import { GooglePlus } from '@ionic-native/google-plus';
import { Camera } from '@ionic-native/camera';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
// import { FirstPage } from '../pages/first/first';
//import { LoginPage } from "../pages/login/login";
//import { LoggedinPage } from "../pages/loggedin/loggedin";
//import { RegisterPage } from "../pages/register/register";
// import { CameraPage } from "../pages/camera/camera";
import { AlertService } from "../pages/shared/alert";
import { CameraPageModule } from "../pages/camera/camera.module";
import { FirstPageModule } from "../pages/first/first.module";
import { LoginPageModule } from "../pages/login/login.module";
import { RegisterPageModule } from "../pages/register/register.module";
import { LoggedinPageModule } from "../pages/loggedin/loggedin.module";
import { ProductModule } from "../pages/product/product.module";
import { FormValidationService } from "../pages/product/shared/form-validation.service";
import { ProdService } from "../pages/product/prod.service";
export var firebaseAuth = {
    apiKey: "AIzaSyCzBCvoW2D-o4hLSimT5N3TXSWtkPRF3ls",
    authDomain: "test-project-c160b.firebaseapp.com",
    databaseURL: "https://test-project-c160b.firebaseio.com",
    projectId: "test-project-c160b",
    storageBucket: "test-project-c160b.appspot.com",
    messagingSenderId: "558571822265"
};
firebase.initializeApp(firebaseAuth);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp,
                HomePage,
            ],
            imports: [
                FirstPageModule,
                CameraPageModule,
                LoginPageModule,
                RegisterPageModule,
                LoggedinPageModule,
                ProductModule,
                BrowserModule,
                IonicModule.forRoot(MyApp),
                AngularFireModule.initializeApp(firebaseAuth),
                AngularFireAuthModule,
                AngularFireDatabaseModule
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                MyApp,
                HomePage,
            ],
            providers: [
                StatusBar,
                SplashScreen,
                Camera,
                AlertService,
                { provide: ErrorHandler, useClass: IonicErrorHandler },
                FormValidationService,
                ProdService
                // GooglePlus
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map