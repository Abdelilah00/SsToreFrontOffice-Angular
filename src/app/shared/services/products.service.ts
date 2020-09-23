import {Injectable} from '@angular/core';

import 'rxjs/add/operator/map';
import {BaseService} from './base-service.service';
import {Product} from '../models/product';
import {HttpClient} from '@angular/common/http';


@Injectable({providedIn: 'root'})


export class ProductsService extends BaseService<Product> {

    constructor(httpClient: HttpClient) {
        super(httpClient, 'products', 'admin');
    }


}
