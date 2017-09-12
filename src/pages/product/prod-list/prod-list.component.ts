import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
// import { Router, ActivatedRoute } from '@angular/router';
import { FormControl } from "@angular/forms";
import 'rxjs/add/operator/distinctUntilChanged';

import { Hero } from "../prod.model";

// import { filter } from "rxjs/operator/filter";
import { Observable } from "rxjs/Observable";
import { ProdService } from "../prod.service";
// import { ProdDetailComponent } from "../prod-detail/prod-detail.component";
// import { ProdButtonComponent} from '../shared/prod-button/prod-button.component';
@IonicPage()
@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  // styleUrls: ['./prod-list.component.css']
})
export class ProdListComponent implements OnInit {
  // heroes: Array<Hero> = [];
  heroes: Observable<Hero[]>;
  // @Input() heroes;
  @Output() deleteProdEvent = new EventEmitter();

  pageTitle: string = 'Product List';
  errorMessage: string;
  options: Array<string> = ['Book', 'car', 'clothing', 'Electronics', 'Food'];
  selectedHero: Hero;
  filteredOptions$: Observable<string[]> = null;
  searchInput = new FormControl();

  constructor(private prodService: ProdService, public navCtrl: NavController, public navParams: NavParams, ) { }

  filter(val: string): string[] {
    return this.options.filter(option => new RegExp(`^${val}`, 'gi').test(option));
  }

  /* 
    ngDoCheck(){
      console.log('Docheck!');
    }
  */
  ionViewDidLoad() {
    this.getHeroes();
    console.log('ionViewDidLoad LoginPage');
  }
    
  ngOnInit() {
    // this.getHeroes();

    //this.filteredOptions$ = this.searchInput.valueChanges
      // .startWith(null)
      //.map(val => val ? this.filter(val) : this.options.slice());
/*
    this.searchInput.valueChanges
      // .filter(val => !!val)
      // .debounceTime(500)
      .distinctUntilChanged()
      .switchMap((searchTerm: string) => {
        // to filter array of objects
        return this.prodService.getHeroes()
          .map(prods => prods.filter((obj) => {
            if (this.options.indexOf(searchTerm) >= 0) {
              return obj.type === searchTerm;
            } else {
              return obj;
            }
          }))
      })
      .subscribe(heroes => {
        console.log('next: ', heroes);
        this.heroes = heroes
      },
      error => this.errorMessage = <any>error,
      () => console.log('Stream is over')
      );
    */
  }
  
  gotoDetail(): void {
    this.navCtrl.push('ProdDetailComponent', { id: this.selectedHero._id });
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
  onSelect(hero: any) {
    this.selectedHero = hero;
    this.navCtrl.push('ProdDetailComponent', { id: this.selectedHero._id });  
  }
  onAdd(hero: any) {    
    this.navCtrl.push('ProdNewComponent');  
  }

  getHeroes() {
    this.heroes = this.prodService.getHeroes();
    /*
      .subscribe(
      heroes => this.heroes = heroes,
      error => this.errorMessage = <any>error);
    */
  } 

  update(hero: Hero) {
    this.prodService.update(hero)
      .subscribe((heor: any) => {
        if (hero) {
          // this.router.navigate(['/heroes']);
          this.getHeroes();
        } else {
          this.errorMessage = 'Unable to save customer';
        }
      },
      (err) => console.log(err));
  } 
}
