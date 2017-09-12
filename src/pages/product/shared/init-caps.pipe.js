/* There are two categories of pipes: pure and impure. Pipes are pure by default.
** Every pipe you've seen so far has been pure. You make a pipe impure by setting its pure flag to false.
** You could make the FlyingHeroesPipe impure like this:
** @Pipe({
** name: 'flyingHeroesImpure',
**   pure: false
** })
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
var ProdPriceRangePipe = (function () {
    function ProdPriceRangePipe() {
    }
    ProdPriceRangePipe.prototype.transform = function (allHeroes) {
        return allHeroes.filter(function (hero) { return parseInt(hero.price) > 100; });
    };
    ProdPriceRangePipe = __decorate([
        Pipe({ name: 'prodPriceRange' })
    ], ProdPriceRangePipe);
    return ProdPriceRangePipe;
}());
export { ProdPriceRangePipe };
//# sourceMappingURL=init-caps.pipe.js.map