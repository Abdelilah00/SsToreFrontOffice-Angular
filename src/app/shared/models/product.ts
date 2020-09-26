// Product Colors
import {BaseModel} from './base-model.model';

export type ProductColor =
    'white'
    | 'black'
    | 'red'
    | 'green'
    | 'purple'
    | 'yellow'
    | 'blue'
    | 'gray'
    | 'orange'
    | 'pink';

// Product Size
export type ProductSize = 'M' | 'L' | 'XL';

// Product Tag
export type ProductTags = 'nike' | 'puma' | 'lifestyle' | 'caprese';

// Product
export class Product extends BaseModel {
    name?: string;
    price?: number;
    imageCover?: string;
    images?: [{
        url: string;
    }];
    overview?: string;
    category?: string;
    newest?: boolean;
    sale?: boolean;

    salePrice?: number;
    discount?: number;
    pictures?: string;
    shortDetails?: string;
    stock?: number;
    colors?: ProductColor[];
    size?: ProductTags[];
    tags?: ProductSize[];
    variants?: any[];
}

// Color Filter
export interface ColorFilter {
    color?: ProductColor;
}

// Tag Filter
export interface TagFilter {
    tag?: ProductTags;
}

