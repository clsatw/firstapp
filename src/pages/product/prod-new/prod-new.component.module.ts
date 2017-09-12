import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { IonicPageModule } from 'ionic-angular';
import { ProdNewComponent } from './prod-new.component';

@NgModule({
  declarations: [
    ProdNewComponent,
  ],
  imports: [
    CommonModule,
    IonicPageModule.forChild(ProdNewComponent),
  ],
  exports: [
    ProdNewComponent,
  ]
})
export class ProductNewModule {}