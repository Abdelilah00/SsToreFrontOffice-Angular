import {BaseModel} from './base-model.model';

export interface Review extends BaseModel {
    comment: string;
    customerEmail: string;
    customerFullName: string;
    productId: number;
    stars: number;
}

