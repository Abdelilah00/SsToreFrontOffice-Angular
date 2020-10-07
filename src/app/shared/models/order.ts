import {CartItem} from './cart-item';
import {BaseModel} from './base-model.model';

// Order
export interface Order extends BaseModel {
    customerAddress: string;
    customerCity: string;
    customerCountry: string;
    customerEmail: string;
    customerFirstName: string;
    customerLastName: string;
    customerPhoneNumber: string;
    customerState: string;
    customerZip: string;
    orderDetails: [{
        price: number;
        productId: number;
        qte: number
    }];

    shippingDetails?: any;
    product?: CartItem;
    orderId?: any;
    totalAmount?: any;
}


