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

export class SelectedCharacteristics {
    name?: string;
    value?: string;
}

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
    onSale?: boolean;

    productCharacteristics: [{
        characteristicName: string,
        value: string[]
    }];
    specifications: [{
        name: string,
        value: string
    }];

    // Local Attr
    selectedCharacteristics?: SelectedCharacteristics[];

    discount?: { percent: number, endDate: Date }; // %
    salePrice?: number; // after discount price


    pictures?: string;
    stockQte?: number;

    shortDetails?: string;
    colors?: ProductColor[];
    size?: ProductSize[];
    tags?: ProductTags[];
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

