import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FilterModel, Product} from '../../../../shared/models/product';
import {ProductsService} from '../../../../shared/services/products.service';
import {animate, style, transition, trigger} from '@angular/animations';
import * as $ from 'jquery';
import {CharacteristicService} from '../../../../shared/services/characteristic.service';

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
    public sortByOrder = '';   // sorting
    public animation: any;   // Animation
    paginate: any = {};
    public items: Product[] = [];
    public tags: any[] = [];
    public colors: any[] = [];
    public allCharacteristics: any;
    private finaleFilter = new Array<FilterModel>();

    constructor(private route: ActivatedRoute,
                private router: Router,
                private productsService: ProductsService,
                private characteristicService: CharacteristicService) {
    }

    // Update tags filter
    updateFilters(selectedFilter: any) {
        const filter = this.finaleFilter.find(x => x.name === selectedFilter.name);

        console.log(filter);
        if (filter !== undefined || null) {
            filter.values = selectedFilter.values;
        } else {
            this.finaleFilter.push({name: selectedFilter.name, interval: 'IN', values: selectedFilter.values});
        }

        this.animation === 'fadeOut' ? this.fadeIn() : this.fadeOut(); // animation
        this.updateProducts();
    }

    // Update price filter
    updatePriceFilters(price: any) {
        const priceFilter = this.finaleFilter.find(filter => filter.name === 'price');

        if (priceFilter !== undefined || null) {
            priceFilter.values = price;
        } else {
            this.finaleFilter.push({name: 'price', interval: 'BETWEEN', values: price});

        }

        this.animation === 'fadeOut' ? this.fadeIn() : this.fadeOut(); // animation
        this.updateProducts();
    }

    ngOnInit() {
        this.characteristicService.getAll().subscribe(data => this.allCharacteristics = data);

        this.route.queryParams.subscribe(params => {
            const query = params['categoryId'];
            if (!isNaN(query)) {
                this.productsService.getByCategory(query).subscribe(products => {
                    this.products = products;
                });
            } else {
                this.productsService.getAll().subscribe(products => {
                    this.products = products;
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
        this.animation === 'fadeOut' ? this.fadeIn() : this.fadeOut(); // animation
    }

    public setPage(page: number) {
    }

    private updateProducts(): void {
        if (this.finaleFilter.length > 0) {
            this.productsService.getByFilter(this.finaleFilter).subscribe(prods => this.products = prods);
        }
    }
}
