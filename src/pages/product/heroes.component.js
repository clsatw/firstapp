/* put presentation logic in the component class, and not in the template
** The component's responsibility is for the presentation and gathering of information for
** the view. It should not care how it gets the data, just that it knows who to ask for it.
** Separating the data services moves the logic on how to get it to the data service,
** and lets the component be simpler and more focused on the view.
*/
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
import { ProdService } from './prod.service';
// tslint:disable-next-line:quotemark
var HeroesComponent = (function () {
    // selectedHero: IHero;
    function HeroesComponent(
        // private router: Router,
        // private route: ActivatedRoute,
        heroService) {
        //this.searchInput = new FormControl('');
        // Initialize strings
        this.heroService = heroService;
        this.heroes = [];
    }
    // get price() { return this.heroForm.get('price'); }
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
        /* create mock data, To remove the collection: db.prods.drop
        let mockData: IHero[];
        mockData = gg.createRandomCatalog(6);
        for (const hero of mockData) {
          this.add(hero);
        }
        */
        /*
        this.route.params.subscribe(
          params => {
            const id = +params['id'];
            this.gotoProd(id);
          }
        )
        */
    };
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes()
            .subscribe(function (heroes) { return _this.heroes = heroes; }, function (error) { return _this.errorMessage = error; });
    };
    HeroesComponent.prototype.add = function (hero) {
        var _this = this;
        // name = name.trim();
        if (!hero) {
            return;
        }
        this.heroService.add(hero)
            .subscribe(function (data) {
            if (data) {
                // this.selectedHero = null
                // this.router.navigateByUrl('/heroes/list');
                _this.getHeroes();
            }
            else {
                _this.errorMessage = 'Unable to save customer';
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    HeroesComponent.prototype.update = function (hero) {
        var _this = this;
        this.heroService.update(hero)
            .subscribe(function (heor) {
            if (hero) {
                // this.router.navigate(['/heroes']);
                _this.getHeroes();
            }
            else {
                _this.errorMessage = 'Unable to save customer';
            }
        }, function (err) { return console.log(err); });
    };
    HeroesComponent.prototype.delete = function (hero) {
        var _this = this;
        this.heroService.delete(hero)
            .subscribe(function () {
            //if (status) {
            //console.log('del status: ', res);// this.router.navigateByUrl('/heroes/list');
            _this.getHeroes();
            //} else {
            //  this.errorMessage = 'Unable to delete customer';
            //}
        }, function (err) { return console.log(err); });
        /*
       .then(() => {
         this.heroes = this.heroes.filter(h => h !== hero);
         if (this.selectedHero === hero) { this.selectedHero = null; }
       });
       */
    };
    HeroesComponent = __decorate([
        Component({
            selector: 'app-hero',
            templateUrl: './heroes.component.html',
            styleUrls: ['./heroes.component.css']
        }),
        __metadata("design:paramtypes", [ProdService])
    ], HeroesComponent);
    return HeroesComponent;
}());
export { HeroesComponent };
//# sourceMappingURL=heroes.component.js.map