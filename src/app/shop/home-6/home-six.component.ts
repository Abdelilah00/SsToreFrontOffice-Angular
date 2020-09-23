import {Component, OnInit} from '@angular/core';
import {Product} from '../../shared/models/product';
import {ProductsService} from '../../shared/services/products.service';

@Component({
    selector: 'app-home-six',
    templateUrl: './home-six.component.html',
    styleUrls: ['./home-six.component.scss']
})
export class HomeSixComponent implements OnInit {

    public products: Product[] = [];

    constructor(private productsService: ProductsService) {
    }

    ngOnInit() {
        this.productsService.getAll().subscribe(product => {
            this.products = product;
        });
    }

}
