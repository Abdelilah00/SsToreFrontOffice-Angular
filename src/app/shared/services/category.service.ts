import {Injectable} from '@angular/core';
import {BaseService} from './base-service.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {retry} from 'rxjs/operators';
import {Category} from '../models/category';


@Injectable({providedIn: 'root'})


export class CategoryService extends BaseService<Category> {

    constructor(httpClient: HttpClient) {
        super(httpClient, 'categories', 'admin');
    }

    getTree(): Observable<Array<Category>> {
        this.loading = true;
        return this.httpClient.get<Array<Category>>(this.baseUrl + '/getTree' +
            '')
            .pipe(retry(1));
    }

}
