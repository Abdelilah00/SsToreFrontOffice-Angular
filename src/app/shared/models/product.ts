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
    salePrice?: number;
    imageCover?: String;
    images?: String[];
    discount?: number;
    pictures?: string;
    shortDetails?: string;
    description?: string;
    stock?: number;
    new?: boolean;
    sale?: boolean;
    category?: string;
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
