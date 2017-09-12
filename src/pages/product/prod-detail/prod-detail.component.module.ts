import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProdDetailComponent } from './prod-detail.component';

@NgModule({
  declarations: [
    ProdDetailComponent,
  ],
  imports: [
    IonicPageModule.forChild(ProdDetailComponent),
  ],
  exports: [
    ProdDetailComponent,
  ]
})
export class ProductDetailModule {}