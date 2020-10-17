import {Injectable} from '@angular/core';
import {BaseService} from './base-service.service';
import {HttpClient} from '@angular/common/http';
import {Order} from '../models/order';

@Injectable({
    providedIn: 'root'
})
export class OrdersService extends BaseService<Order> {

    constructor(httpClient: HttpClient) {
        super(httpClient, 'orders', 'admin');
    }

}
