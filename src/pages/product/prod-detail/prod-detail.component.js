var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { ActivatedRoute, Params } from '@angular/router';
// import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { ProdService } from '../prod.service';
var ProdDetailComponent = (function () {
    function ProdDetailComponent(heroService, navCtrl, navParams) {
        this.heroService = heroService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProdDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // The hero id is a number. Route parameters are always strings.
        // So the route parameter value is converted to a number with the JavaScript (+) operator.
        var id = this.navParams.get('id');
        this.heroService.getHero(id)
            .subscribe(function (hero) { return _this.hero = hero; }, function (error) { return _this.errorMessage = error; });
    };
    ProdDetailComponent.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    ProdDetailComponent.prototype.save = function () {
        var _this = this;
        this.heroService.update(this.hero)
            .subscribe(function () { return _this.goBack(); });
    };
    ProdDetailComponent = __decorate([
        Component({
            selector: 'prod-detail',
            templateUrl: './prod-detail.component.html',
            styleUrls: ['./prod-detail.component.css']
        }),
        __metadata("design:paramtypes", [ProdService, NavController, NavParams])
    ], ProdDetailComponent);
    return ProdDetailComponent;
}());
export { ProdDetailComponent };
//# sourceMappingURL=prod-detail.component.js.map