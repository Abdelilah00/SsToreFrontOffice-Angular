import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PayPalConfig, PayPalEnvironment, PayPalIntegrationType} from 'ngx-paypal';
// import {  IPayPalConfig,  ICreateOrderRequest } from 'ngx-paypal';
import {CartItem} from '../../../shared/models/cart-item';
import {ProductsService} from '../../../shared/services/products.service';
import {CartService} from '../../../shared/services/cart.service';
import {OrderService} from '../../../shared/services/order.service';
import {Observable, of} from 'rxjs';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

    // form group
    public checkoutForm: FormGroup;
    public cartItems: Observable<CartItem[]> = of([]);
    public checkOutItems: CartItem[] = [];
    public orderDetails: any[] = [];
    public amount: number;
    public payPalConfig ?: PayPalConfig;


    // Form Validator
    constructor(private fb: FormBuilder,
                private cartService: CartService,
                public productsService: ProductsService,
                private orderService: OrderService) {

        this.checkoutForm = this.fb.group({
            customerFirstName: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
            customerLastName: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
            customerPhoneNumber: ['', [Validators.required, Validators.pattern('[0-9]+')]],
            customerEmail: ['', [Validators.required, Validators.email]],
            customerAddress: ['', [Validators.required, Validators.maxLength(50)]],
            customerCountry: ['', Validators.required],
            customerCity: ['', Validators.required],
            customerState: ['', Validators.required],
            customerZip: ['', Validators.required],
            orderDetails: ['', Validators.required]
        });
    }

    ngOnInit() {
        this.cartItems = this.cartService.getItems();
        this.cartItems.forEach(item => this.orderDetails.push({id: item['id'], qte: item['qte']}));
        this.checkoutForm.controls['orderDetails'].value(this.orderDetails);
        this.getTotal().subscribe(amount => this.amount = amount);
        this.initConfig();
    }


    // Get sub Total
    public getTotal(): Observable<number> {
        return this.cartService.getTotalAmount();
    }

    // stripe payment gateway
    stripeCheckout() {
        var handler = (<any>window).StripeCheckout.configure({
            key: 'PUBLISHBLE_KEY', // publishble key
            locale: 'auto',
            token: (token: any) => {
                // You can access the token ID with `token.id`.
                // Get the token ID to your server-side code for use.
                this.orderService.createOrder(this.checkOutItems, this.checkoutForm.value, token.id, this.amount);
            }
        });
        handler.open({
            name: 'Multikart',
            description: 'Online Fashion Store',
            amount: this.amount * 100
        });
    }

    // Paypal payment gateway
    private initConfig(): void {
        this.payPalConfig = new PayPalConfig(PayPalIntegrationType.ClientSideREST, PayPalEnvironment.Sandbox, {
            commit: true,
            client: {
                sandbox: 'CLIENT_ID', // client Id
            },
            button: {
                label: 'paypal',
                size: 'small',    // small | medium | large | responsive
                shape: 'rect',     // pill | rect
                //color: 'blue',   // gold | blue | silver | black
                //tagline: false
            },
            onPaymentComplete: (data, actions) => {
                this.orderService.createOrder(this.checkOutItems, this.checkoutForm.value, data.orderID, this.amount);
            },
            onCancel: (data, actions) => {
                console.log('OnCancel');
            },
            onError: (err) => {
                console.log('OnError');
            },
            transactions: [{
                amount: {
                    currency: 'USD', //this.productsService.currency,
                    total: this.amount
                }
            }]
        });
    }


}
