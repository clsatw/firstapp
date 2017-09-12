var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, Input } from '@angular/core';
var ProdHighlightDirective = (function () {
    function ProdHighlightDirective(el) {
        this.el = el;
    }
    /* Respond when Angular (re)sets data-bound input properties.
    ** The method receives a SimpleChanges object of current and previous property values.
    ** Called before ngOnInit() and whenever one or more data-bound input properties change.
    */
    ProdHighlightDirective.prototype.ngOnChanges = function () {
        this.el.nativeElement.style.color = this.color || 'yellow';
    };
    __decorate([
        Input('prodHighlight'),
        __metadata("design:type", String)
    ], ProdHighlightDirective.prototype, "color", void 0);
    ProdHighlightDirective = __decorate([
        Directive({ selector: '[prodHighlight]' }),
        __metadata("design:paramtypes", [ElementRef])
    ], ProdHighlightDirective);
    return ProdHighlightDirective;
}());
export { ProdHighlightDirective };
//# sourceMappingURL=prod-hightlight.directive.js.map