import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
  // not sure if we need to declare entrycompenonts here
  entryComponents: [
    LoginPage,
  ],
  exports: [
    LoginPage,
  ]
})
export class LoginPageModule {}
