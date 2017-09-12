var _this = this;
import { Validators } from '@angular/forms';
import { NumberValidators } from '../shared/number.validator';
export var formError = {
    'id': '',
    'type': '',
    'name': '',
    'price': ''
};
// could be retireve from database for differnet languages
export var validationMessages = {
    'id': {
        'required': 'id is required',
        'minlength': 'id must be at least three characters.',
        'maxlength': 'id cannot exceed 50 characters.'
    },
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
export var createForm = function () {
    return _this._fb.group({
        id: ['', Validators.compose([
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(50)
            ])],
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
        _this.heroForm.patchValue({
            imgUrl: 'http://lorempixel.com/400/200',
        });
};
//# sourceMappingURL=formValidator.js.map