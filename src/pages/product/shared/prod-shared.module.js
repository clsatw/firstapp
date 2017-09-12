var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { ProdButtonComponent } from "./prod-button/prod-button.comonent";
import { ProdHighlightDirective } from "./prod-button/prod-hightlight.directive";
// tslint:disable-next-line:quotemark
var ProdSharedModule = (function () {
    function ProdSharedModule() {
    }
    ProdSharedModule = __decorate([
        NgModule({
            imports: [],
            declarations: [
                ProdButtonComponent,
                ProdHighlightDirective,
            ],
            // export components, pipes or directives so the parent moudle can see them.
            exports: [
                ProdButtonComponent,
                ProdHighlightDirective,
            ]
        })
    ], ProdSharedModule);
    return ProdSharedModule;
}());
export { ProdSharedModule };
//# sourceMappingURL=prod-shared.module.js.map