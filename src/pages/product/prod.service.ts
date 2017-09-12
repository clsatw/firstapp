// Do create a new service once the service begins to exceed that singular purpose.

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/startWith';

import { Hero } from './prod.model';
// import { Data } from './mock-data';

@Injectable()
export class ProdService {
    private heroesUrl = 'http://ubuy.asuscomm.com/api/prods/hero';
    cachedData: Hero[];
    constructor(private http: Http) { }
 
    private handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
    // Each Http service method returns an Observable of HTTP Response objects.
    getHero(id: string): Observable<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url)
            // .filter(hero => hero.id === id)
            .map((res: Response) => <Hero>res.json())
            .do(data => console.log(JSON.stringify(data)))
            .catch(this.handleError);
    }

    getHeroes(): Observable<Hero[]> {
        return this.http.get(this.heroesUrl)  // chain map method to extract heroes from the response data            
            // .map((res: Response) => res.json().filter(x => x.type === type && x.price > 0))
            .map((res: Response) => res.json())
            // .startWith(this.cachedData)
            .catch(this.handleError);
    }

    update(hero: Hero): Observable<any> {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });

        const url = `${this.heroesUrl}/${hero._id}`;
        return this.http
            .put(url, JSON.stringify(hero), options)
            // .map(res => res.json().data)
            .map(res => {
                const data = res.json();
                return data.hero;
            })
            .catch(this.handleError);
    }

    add(hero: Hero): Observable<Hero> {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http
            .post(this.heroesUrl, JSON.stringify(hero), options)
            // .map(res => res.json().data)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    delete(hero: Hero): Observable<boolean> {
        // const headers = new Headers({ 'Content-Type': 'application/json' });
        // const options = new RequestOptions({ headers: headers });

        const url = `${this.heroesUrl}/${hero._id}`;
        return this.http.delete(url)
            // boolean
            // .do(res=>console.log('del: ', res))
            .map((res: Response) => res.json())
            .catch(this.handleError);
    } 
}


