import {Injectable} from '@angular/core';
import {BaseService} from './base-service.service';
import {HttpClient} from '@angular/common/http';
import {Review} from '../models/review.model';

@Injectable({
  providedIn: 'root'
})

export class ReviewsService extends BaseService<Review> {

  constructor(httpClient: HttpClient) {
    super(httpClient, 'reviews', 'admin');
  }
}
