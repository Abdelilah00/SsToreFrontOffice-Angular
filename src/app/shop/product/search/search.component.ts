import {Component, OnInit} from '@angular/core';
import {Product} from '../../../shared/models/product';
import {ProductsService} from '../../../shared/services/products.service';
import {animate, style, transition, trigger} from '@angular/animations';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    animations: [  // angular animation
        trigger('Animation', [
            transition('* => fadeOut', [
                style({opacity: 0.1}),
                animate(1000, style({opacity: 0.1}))
            ]),
            transition('* => fadeIn', [
                style({opacity: 0.1}),
                animate(1000, style({opacity: 0.1}))
            ])
        ])
    ]
})
export class SearchComponent implements OnInit {

    public products: Product[] = [];
    public searchProducts: Product[] = [];
    public animation: any;
    public searchTerms: any = '';

    constructor(private productsService: ProductsService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            const query = params['query'];
            if (query != null) {
                this.searchTerm(query);
            }
        });
        //this.productsService.getAll().subscribe(product => this.products = product);
    }

    public searchTerm(query: string) {
        this.productsService.getByQuery(query).subscribe(data => {
            this.searchProducts = data;
        });
    }
}
