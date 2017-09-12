import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
// import { ActivatedRoute, Params } from '@angular/router';
// import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import {Hero} from '../prod.model';
import { ProdService } from '../prod.service';

@IonicPage()
@Component({
  selector: 'prod-detail',
  templateUrl: './prod-detail.component.html',
  // styleUrls: ['./prod-detail.component.css']
})

export class ProdDetailComponent implements OnInit {
  // @Input() hero: Hero.R;
  errorMessage: string;
  hero: Hero;

  constructor(private prodService: ProdService, public navCtrl: NavController, public navParams: NavParams ){

   }

  ngOnInit(): void {
    // The hero id is a number. Route parameters are always strings.
    // So the route parameter value is converted to a number with the JavaScript (+) operator.
      let id = this.navParams.get('id');
      this.prodService.getHero(id)
      .subscribe(hero => this.hero = hero,
      error => this.errorMessage = <any>error);
  }

  goBack(): void {
    this.navCtrl.pop();
  }

  save(): void {
    // we may need to update heroes var in prod-list
    this.prodService.update(this.hero)
      .subscribe(() => {
        this.prodService.getHeroes();
        this.navCtrl.push('ProdListComponent');
      });      
  }
  onDelete(hero: Hero) {
    this.prodService.delete(hero)
      .subscribe(() => {
        this.navCtrl.push('ProdListComponent');
        //if (status) {
        //console.log('del status: ', res);// this.router.navigateByUrl('/heroes/list');
        // this.getHeroes();
        //} else {
        //  this.errorMessage = 'Unable to delete customer';
        //}
      },
      (err) => console.log(err));
  }
}
