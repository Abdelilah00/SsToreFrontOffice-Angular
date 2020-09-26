import {Component, OnInit} from '@angular/core';
import {Product} from '../../../../shared/models/product';
import {ProductsService} from '../../../../shared/services/products.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-related-products',
    templateUrl: './related-products.component.html',
    styleUrls: ['./related-products.component.scss']
})
export class RelatedProductsComponent implements OnInit {

    public products: Product[] = [];

    constructor(private route: ActivatedRoute,
                private productsService: ProductsService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            const id = +params['id'];
            this.productsService.getRelated(id).subscribe(product => this.products = product);
        });
    }

}
