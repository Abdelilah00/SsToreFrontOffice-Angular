import {BaseService} from './base-service.service';
import {Characteristic} from '../models/characteristic';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})

export class CharacteristicService extends BaseService<Characteristic> {

    constructor(httpClient: HttpClient) {
        super(httpClient, 'characteristics', 'admin');
    }
}
