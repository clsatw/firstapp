import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// with lazy loading used, no import of them is reuqired.
// import { HomePage } from '../pages/home/home';
// import { HeroesComponent } from '../pages/product/heroes.component';
// import { LoginPage } from "../pages/login/login";
// import { SocialLoginPage } from "../pages/social-login/social-login";
// import { CameraPage } from "../pages/camera/camera";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: string = 'HomePage';

  @ViewChild(Nav) nav: Nav;
  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: 'HomePage' },
      { title: 'Login', component: 'SocialLoginPage'},
      { title: 'Products', component: 'ProdListComponent' },
      { title: 'Camera', component: 'CameraPage' },
      { title: 'Map', component: 'MymapPage' }
    ];
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

