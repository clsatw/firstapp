// SharedModule exists to make commonly used components, directives,
// and pipes available for use in the templates of components in many other modules.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// formsModule is for 2-way binding
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProdPriceRangePipe } from "./init-caps.pipe";
// import { StarComponent } from "app/shared/star.component";
// import { async } from 'rxjs/scheduler/async';
// import { IonicPageModule } from 'ionic-angular';
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        NgModule({
            // import all modules required by the assets in the SharedModule
            imports: [CommonModule, FormsModule, ReactiveFormsModule],
            // export all symbols from the SharedModule that other feature modules need to use
            exports: [
                CommonModule,
                // IonicPageModule,
                FormsModule,
                ReactiveFormsModule,
                ProdPriceRangePipe,
            ],
            // declar StarComponent later
            // components shared by other feature modules
            declarations: [
                ProdPriceRangePipe,
            ],
        })
    ], SharedModule);
    return SharedModule;
}());
export { SharedModule };
//# sourceMappingURL=shared.module.js.map