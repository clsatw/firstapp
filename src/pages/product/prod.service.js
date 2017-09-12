// Do create a new service once the service begins to exceed that singular purpose.
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
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
// import { Data } from './mock-data';
var ProdService = (function () {
    function ProdService(http) {
        this.http = http;
        this.heroesUrl = 'http://localhost:3000/api/prods/hero';
    }
    /*
        getHeroes(): Promise<Hero[]> {
            let HEROES = Data.createRandomCatalog(5);
            return Promise.resolve(HEROES);
        }
   
    getProdTypes(val: string): Observable<any[]> {
        return this.http
            .get(`${this.heroesUrl}?type=${val}`)
            // .filter(hero => hero.type === val)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }
    */
    // Each Http service method returns an Observable of HTTP Response objects.
    ProdService.prototype.getHero = function (id) {
        var url = this.heroesUrl + "/" + id;
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .do(function (data) { return console.log(JSON.stringify(data)); })
            .catch(this.handleError);
    };
    /*
            getHeroes(): Observable<IHero[]> {
                return this.http.get(this.heroesUrl)            // chain map method to extract heroes from the response data
                    .map(res => res.json())
                    // .do(data => console.log(JSON.stringify(data)))
                    // .filter(hero => hero.type === type)
                    // .map(this.extractData)
                    .catch(this.handleError);
            }
    */
    ProdService.prototype.getHeroes = function () {
        return this.http.get(this.heroesUrl) // chain map method to extract heroes from the response data            
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ProdService.prototype.update = function (hero) {
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        var url = this.heroesUrl + "/" + hero._id;
        return this.http
            .put(url, JSON.stringify(hero), options)
            .map(function (res) {
            var data = res.json();
            return data.hero;
        })
            .catch(this.handleError);
    };
    ProdService.prototype.add = function (hero) {
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        return this.http
            .post(this.heroesUrl, JSON.stringify(hero), options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ProdService.prototype.delete = function (hero) {
        // const headers = new Headers({ 'Content-Type': 'application/json' });
        // const options = new RequestOptions({ headers: headers });
        var url = this.heroesUrl + "/" + hero._id;
        return this.http.delete(url)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ProdService.prototype.extractData = function (res) {
        // The response data are in JSON string form. The app must parse that string into JavaScript objects by calling response.json().
        var body = res.json();
        // console.dir(body.data);
        return body || {};
    };
    ProdService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    };
    ProdService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], ProdService);
    return ProdService;
}());
export { ProdService };
/*
getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
        // Simulate server latency with 2 second delay
        setTimeout(() => resolve(this.getHeroes()), 2000);
    });
}
*/
//# sourceMappingURL=prod.service.js.map