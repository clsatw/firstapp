var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
var FormValidationService = (function () {
    function FormValidationService() {
    }
    // Start of a generic validator. we can move this to a service for any reactiveForm we use
    FormValidationService.prototype.onValueChanged = function (data, formError, gForm, validationMsg) {
        for (var field in formError) {
            if (formError.hasOwnProperty(field)) {
                var hasError = gForm.controls[field].dirty &&
                    !gForm.controls[field].valid;
                formError[field] = '';
                if (hasError) {
                    for (var key in gForm.controls[field].errors) {
                        if (gForm.controls[field].errors.hasOwnProperty(key)) {
                            // if error occurs, setting the correct validation msg into that field.
                            formError[field] += validationMsg[field][key] + ' ';
                        }
                    }
                }
            }
        }
    };
    FormValidationService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], FormValidationService);
    return FormValidationService;
}());
export { FormValidationService };
//# sourceMappingURL=form-validation.service.js.map