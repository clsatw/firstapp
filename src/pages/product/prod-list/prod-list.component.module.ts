import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { IonicPageModule } from 'ionic-angular';

import { ProdListComponent } from './prod-list.component';

@NgModule({
  declarations: [
    ProdListComponent,
  ],
  imports: [    
    CommonModule,
    IonicPageModule.forChild(ProdListComponent),
  ],
  exports: [
    ProdListComponent,
  ]
})
export class ProductListModule {}