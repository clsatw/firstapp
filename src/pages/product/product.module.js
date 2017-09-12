// Modules don't inherit access to the components, directives, or pipes that are declared in other modules.
// What AppModule imports is irrelevant to ContactModule and vice versa
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from './shared/shared.module';
// import { ProdSharedModule} from './shared/prod-shared.module';
// import { Material2Module } from 'pp/material2/material2.module';
import { HeroesComponent } from './heroes.component';
import { ProdService } from './prod.service';
import { ProdButtonComponent } from "./shared/prod-button/prod-button.comonent";
import { SearchService } from './shared/search.service';
import { ProdNewComponent } from "./prod-new/prod-new.component";
import { ProdListComponent } from "./prod-list/prod-list.component";
import { ProdDetailComponent } from './prod-detail/prod-detail.component';
import { ProdHighlightDirective } from "./shared/prod-button/prod-hightlight.directive";
import { IonicPageModule } from "ionic-angular";
// import { StarComponent } from "app/shared/star.component";
/*
const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HeroesComponent },
      { path: '/:id', component: HeroDetailComponent }
    ]
  }
]


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full'},
  { path: 'list', component: HeroesComponent },
  { path: ':id', component: ProdDetailComponent }
]
*/
var ProductModule = (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        NgModule({
            imports: [
                SharedModule,
                IonicPageModule.forChild(HeroesComponent),
            ],
            declarations: [
                // a component has to be declared in a module and only once.
                ProdHighlightDirective,
                ProdButtonComponent,
                HeroesComponent,
                ProdDetailComponent,
                ProdNewComponent,
                ProdListComponent
                // StarComponent
            ],
            /* why it is no longer export HeroesComponent?
            ** Now that you navigate to HeroesComponent with the router,
            ** there's no reason to make it public. Also, HeroesComponent doesn't need
            ** a selector. No template will ever again reference this ContactComponent.
            */
            // application wide
            providers: [ProdService, SearchService]
        })
    ], ProductModule);
    return ProductModule;
}());
export { ProductModule };
//# sourceMappingURL=product.module.js.map