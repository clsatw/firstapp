var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormValidationService } from "../shared/form-validation.service";
import { NumberValidators } from "../shared/number.validator";
import { ProdService } from "../prod.service";
var ProdNewComponent = (function () {
    function ProdNewComponent(_fb, FormValidationService, heroService) {
        this._fb = _fb;
        this.FormValidationService = FormValidationService;
        this.heroService = heroService;
        this.createNewProdEvent = new EventEmitter();
    }
    ;
    ProdNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        // current validator error msg
        this.formError = {
            'type': '',
            'name': '',
            'price': ''
        };
        // could be retireve from database for differnet languages
        this.validationMessages = {
            'type': {
                'required': 'type is required',
                'minlength': 'type must be at least 5 characters.',
                'maxlength': 'type cannot exceed 50 characters.'
            },
            'name': {
                'required': 'name is required',
                'minlength': 'name must be at least 5 characters.',
                'maxlength': 'name cannot exceed 50 characters.'
            },
            'price': {
                'range': 'price muse be btw 1 (lowest) and 999 (highest).'
            }
        };
        this.createForm();
        this.heroForm.valueChanges
            .debounceTime(500)
            .subscribe(function (data) { return _this.FormValidationService.onValueChanged(data, _this.formError, _this.heroForm, _this.validationMessages); });
    };
    ;
    ProdNewComponent.prototype.createForm = function () {
        this.heroForm = this._fb.group({
            type: [null, Validators.required],
            name: ['', Validators.compose([
                    Validators.required,
                    Validators.minLength(5),
                    Validators.maxLength(50)
                ])],
            price: ['', NumberValidators.range(1, 999)],
            imgUrl: ''
        }),
            // to set all value use setvalue method.
            this.heroForm.patchValue({
                imgUrl: 'http://lorempixel.com/400/200',
            });
    };
    ProdNewComponent.prototype.add = function (hero) {
        // pass hero to parent componemt - i.e., heroes.component
        this.createNewProdEvent.emit(hero);
    };
    ProdNewComponent.prototype.onSubmit = function () {
        this.add(this.heroForm.value);
        this.heroForm.reset();
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], ProdNewComponent.prototype, "createNewProdEvent", void 0);
    ProdNewComponent = __decorate([
        Component({
            selector: 'app-prod-new',
            templateUrl: './prod-new.component.html',
            styleUrls: ['./prod-new.component.css']
        }),
        __metadata("design:paramtypes", [FormBuilder, FormValidationService, ProdService])
    ], ProdNewComponent);
    return ProdNewComponent;
}());
export { ProdNewComponent };
//# sourceMappingURL=prod-new.component.js.map