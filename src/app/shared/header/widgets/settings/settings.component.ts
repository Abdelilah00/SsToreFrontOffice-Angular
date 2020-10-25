import {Component, Input, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {CartItem} from '../../../models/cart-item';
import {CartService} from '../../../../shared/services/cart.service';
import {ProductsService} from '../../../../shared/services/products.service';
import {Observable} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';

declare var $: any;

@Component({
    selector: 'app-header-widgets',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

    @Input() shoppingCartItems: CartItem[] = [];

    public show: boolean = false;

    formSearch: FormGroup;

    constructor(private translate: TranslateService,
                private cartService: CartService,
                public productsService: ProductsService) {
    }

    ngOnInit() {
        this.formSearch = new FormGroup({
            query: new FormControl('', Validators.required),
        });
    }

    public updateCurrency(curr) {
        // this.productsService.currency = curr;
    }

    public changeLanguage(lang) {
        this.translate.use(lang);
    }

    public openSearch() {
        this.show = true;
    }

    public closeSearch() {
        this.show = false;
    }

    public getTotal(): Observable<number> {
        return this.cartService.getTotalAmount();
    }

    public removeItem(item: CartItem) {
        this.cartService.removeFromCart(item);
    }

}
