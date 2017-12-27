var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { Router, ActivatedRoute } from '@angular/router';
import { FormControl } from "@angular/forms";
import 'rxjs/add/operator/distinctUntilChanged';
import { ProdService } from "../prod.service";
import { ProdDetailComponent } from "../prod-detail/prod-detail.component";
// import { ProdButtonComponent} from '../shared/prod-button/prod-button.component';
var ProdListComponent = (function () {
    function ProdListComponent(prodService, navCtrl, navParams) {
        this.prodService = prodService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.deleteProdEvent = new EventEmitter();
        this.pageTitle = 'Product List';
        this.options = ['Book', 'car', 'clothing', 'Electronics', 'Food'];
        this.filteredOptions$ = null;
        this.searchInput = new FormControl();
    }
    ProdListComponent.prototype.filter = function (val) {
        return this.options.filter(function (option) { return new RegExp("^" + val, 'gi').test(option); });
    };
    /*
      ngDoCheck(){
        console.log('Docheck!');
      }
    */
    ProdListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredOptions$ = this.searchInput.valueChanges
            .map(function (val) { return val ? _this.filter(val) : _this.options.slice(); });
        this.searchInput.valueChanges
            .debounceTime(500)
            .distinctUntilChanged()
            .switchMap(searchTerm=> {
                // to filter array of objects
                return _this.prodService.getHeroes()
                    .map(prods=> {
                        return prods.filter(obj=> {
                            if (_this.options.indexOf(searchTerm) >= 0) {
                                return obj.type === searchTerm;
                            }
                            else {
                                return obj;
                            }
                        });
                    });
            })
            .subscribe(heroes=> {
                console.log('next: ', heroes);
                _this.heroes = heroes;
            },
            error=> { return _this.errorMessage = error; },
            ()=> { return console.log('Stream is over'); });
    };
    ProdListComponent.prototype.onDelete = function (hero) {
        // fire deleteProdEvent and pass hero to parent componemt - i.e., heroes.component
        this.deleteProdEvent.emit(hero);
    };
    ProdListComponent.prototype.gotoDetail = function () {
        this.navCtrl.push(ProdDetailComponent, { id: this.selectedHero._id });
    };
    ProdListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Product List: ' + message;
    };
    ProdListComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ProdListComponent.prototype, "heroes", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], ProdListComponent.prototype, "deleteProdEvent", void 0);
    ProdListComponent = __decorate([
        Component({
            selector: 'app-prod-list',
            templateUrl: './prod-list.component.html',
            styleUrls: ['./prod-list.component.css']
        }),
        __metadata("design:paramtypes", [ProdService, NavController, NavParams])
    ], ProdListComponent);
    return ProdListComponent;
}());
export { ProdListComponent };
//# sourceMappingURL=prod-list.component.js.map