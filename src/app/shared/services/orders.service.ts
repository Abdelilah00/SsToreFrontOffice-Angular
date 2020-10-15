import {Injectable} from '@angular/core';
import {BaseService} from './base-service.service';
import {HttpClient} from '@angular/common/http';
import {Order} from '../models/order';
import {Observable} from 'rxjs';
import {retry} from 'rxjs/operators';
import {ApiResponse} from '../models/apiResponse';

@Injectable({
    providedIn: 'root'
})
export class OrdersService extends BaseService<Order> {

    constructor(httpClient: HttpClient) {
        super(httpClient, 'payments', 'admin');
    }

    pay(input: Order): Observable<ApiResponse> {
        return this.httpClient.post<ApiResponse>(this.baseUrl + '/pay', JSON.stringify(input), this.httpOptions)
            .pipe(retry(1));
    }
}
