import {Injectable} from '@angular/core';

import 'rxjs/add/operator/map';
import {BaseService} from './base-service.service';
import {Product} from '../models/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {retry} from 'rxjs/operators';


@Injectable({providedIn: 'root'})


export class ProductsService extends BaseService<Product> {

    constructor(httpClient: HttpClient) {
        super(httpClient, 'products', 'admin');
    }

    getBestSealed(): Observable<Array<Product>> {
        this.loading = true;
        return this.httpClient.get<Array<Product>>(this.baseUrl + '/getBestSealed')
            .pipe(retry(1));
    }

    getByCategory(categoryId: number): Observable<Array<Product>> {
        this.loading = true;
        return this.httpClient.get<Array<Product>>(this.baseUrl + '/getByCategory/' + categoryId)
            .pipe(retry(1));
    }

    getRelated(id: number): Observable<Array<Product>> {
        this.loading = true;
        return this.httpClient.get<Array<Product>>(this.baseUrl + '/getRelated/' + id)
            .pipe(retry(1));
    }

    getNewest(): Observable<Array<Product>> {
        this.loading = true;
        return this.httpClient.get<Array<Product>>(this.baseUrl + '/getNewest')
            .pipe(retry(1));
    }

}
