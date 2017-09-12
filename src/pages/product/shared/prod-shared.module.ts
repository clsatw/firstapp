import { NgModule } from '@angular/core';
import { ProdButtonComponent } from "./prod-button/prod-button.comonent";
import { ProdHighlightDirective } from "./prod-button/prod-hightlight.directive";

// tslint:disable-next-line:quotemark

@NgModule({
    imports: [
        // 3rd party modules or custom modules that we need        
    ],
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
export class ProdSharedModule { }
