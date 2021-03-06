import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Product} from '../../shared/models/product';
import {ProductsService} from '../../shared/services/products.service';
import {WishlistService} from '../../shared/services/wishlist.service';
import {CartService} from '../../shared/services/cart.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {

    @Input() product: Product;

    public variantImage: any = '';
    public selectedItem: any = '';

    constructor(private router: Router,
                public productsService: ProductsService,
                private wishlistService: WishlistService,
                private cartService: CartService) {
    }

    ngOnInit() {
    }

    // Add to cart
    public addToCart(product: Product, quantity: number = 1) {
        this.cartService.addToCart(product, quantity);
    }

    // Add to compare
    public addToCompare(product: Product) {
        // this.productsService.addToCompare(product);
    }

    // Add to wishlist
    public addToWishlist(product: Product) {
        this.wishlistService.addToWishlist(product);
    }

    // Change variant images
    public changeVariantImage(image) {
        this.variantImage = image;
        this.selectedItem = image;
    }

}
