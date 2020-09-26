import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../../../shared/models/product';
import {ProductsService} from '../../../../shared/services/products.service';
import {PaginationService} from '../../../../shared/models/paginate';
import {animate, style, transition, trigger} from '@angular/animations';
import * as $ from 'jquery';

@Component({
    selector: 'app-collection-no-sidebar',
    templateUrl: './collection-no-sidebar.component.html',
    styleUrls: ['./collection-no-sidebar.component.scss'],
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
export class CollectionNoSidebarComponent implements OnInit {

    public products: Product[] = [];
    public sortByOrder: string = '';   // sorting
    public animation: any;   // Animation
    paginate: any = {};
    private allProduct: Product[] = [];

    constructor(private route: ActivatedRoute,
                private router: Router,
                private productsService: ProductsService,
                private paginateService: PaginationService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            const category = params['category'];
            if (category != null) {
                this.productsService.getByCategory(category).subscribe(products => {
                    this.allProduct = products;
                    this.products = products;
                    //this.setPage(1);
                });
            } else {
                this.productsService.getAll().subscribe(products => {
                    this.allProduct = products;
                    this.products = products;
                    //this.setPage(1);
                });
            }
        });
    }

    // Animation Effect fadeIn
    public fadeIn() {
        this.animation = 'fadeIn';
    }

    // Animation Effect fadeOut
    public fadeOut() {
        this.animation = 'fadeOut';
    }

    public fourCol() {
        if ($('.product-wrapper-grid').hasClass('list-view')) {
        } else {
            $('.product-wrapper-grid').children().children().children().removeClass();
            $('.product-wrapper-grid').children().children().children().addClass('col-lg-3');
        }
    }

    public sixCol() {
        if ($('.product-wrapper-grid').hasClass('list-view')) {
        } else {
            $('.product-wrapper-grid').children().children().children().removeClass();
            $('.product-wrapper-grid').children().children().children().addClass('col-lg-2');
        }
    }

    // sorting type ASC / DESC / A-Z / Z-A etc.
    public onChangeSorting(val) {
        this.sortByOrder = val;
        this.animation == 'fadeOut' ? this.fadeIn() : this.fadeOut(); // animation
    }

    public setPage(page: number) {
        // get paginate object from service
        this.paginate = this.paginateService.getPager(this.allProduct.length, page);
        // get current page of items
        this.products = this.allProduct.slice(this.paginate.startIndex, this.paginate.endIndex + 1);
    }

}
