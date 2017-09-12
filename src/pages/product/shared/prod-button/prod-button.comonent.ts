import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'toh-hero-button',
  template: `<button ion-button block large>{{btnLabel}}</button>`
})
export class ProdButtonComponent {
  // No aliases
  @Input() btnLabel: string;
  @Output() change = new EventEmitter<any>();
}