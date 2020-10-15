import {Injectable} from '@angular/core';
import {BaseService} from './base-service.service';
import {Category} from '../models/category';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {retry} from 'rxjs/operators';
import {Subscription} from '../models/subscription';

@Injectable({
    providedIn: 'root'
})
export class SubscriptionsService extends BaseService<Category> {

    constructor(httpClient: HttpClient) {
        super(httpClient, 'subscriptions', 'admin');
    }

    subscribe(input: Subscription): Observable<Subscription> {
        this.loading = true;
        return this.httpClient.post<Subscription>(this.baseUrl, JSON.stringify(input), this.httpOptions)
            .pipe(retry(1));
    }

}
