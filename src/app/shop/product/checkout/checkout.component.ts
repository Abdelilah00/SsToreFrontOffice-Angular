import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CartItem} from '../../../shared/models/cart-item';
import {ProductsService} from '../../../shared/services/products.service';
import {CartService} from '../../../shared/services/cart.service';
import {Observable, of} from 'rxjs';
import {OrdersService} from '../../../shared/services/orders.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

    // form group
    public checkoutFormGroup = this.createFormGroup();
    public cartItems: Observable<CartItem[]> = of([]);
    public checkOutItems: CartItem[] = [];
    public orderDetails: any[] = [];
    public amount: number;
    public shippingCost = 0;

    // Form Validator
    constructor(private fb: FormBuilder,
                private cartService: CartService,
                public productsService: ProductsService,
                private orderService: OrdersService,
                private router: Router) {
    }


    ngOnInit() {
        this.cartItems = this.cartService.getItems();

        this.cartItems.subscribe(products => {
            this.checkOutItems = products;
            products.forEach(item => {
                    this.orderDetails.push({
                        productId: item['product'].id,
                        qte: item['quantity'],
                        selectedCharacteristics: item['product'].selectedCharacteristics,
                    });
                }
            );
        });

        this.checkoutFormGroup.controls['orderDetails'].setValue(this.orderDetails);

        this.getTotal().subscribe(amount => this.amount = amount);
    }

    onChangeCity($event): void {
        if ($event.target.value !== 'Oujda') {
            this.shippingCost = 30;
        } else {
            this.shippingCost = 0;
        }
    }

    // Get sub Total
    public getTotal(): Observable<number> {
        return this.cartService.getTotalAmount();
    }

    // stripe payment gateway
    orderCheckout() {
        this.orderService.create(this.checkoutFormGroup.value).subscribe(resp => {
            this.router.navigate(['/home/checkout/success']);
            // @ts-ignore
            fbq('trackCustom', 'CheckedOut', {currency: 'MAD', products: this.orderDetails.map(od => od.productId)});
        });
    }

    createFormGroup(): FormGroup {
        return new FormGroup({
            customerFirstName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]),
            customerLastName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]),
            customerPhoneNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
            customerEmail: new FormControl('', [Validators.required, Validators.email]),
            customerAddress: new FormControl('', [Validators.required, Validators.maxLength(50)]),
            customerCity: new FormControl('', Validators.required),
            customerZip: new FormControl('', Validators.required),
            orderDetails: new FormControl('', Validators.required),
        });
    }

}
