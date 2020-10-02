import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Product, SelectedCharacteristics} from '../../../../shared/models/product';
import {ProductsService} from '../../../../shared/services/products.service';
import {WishlistService} from '../../../../shared/services/wishlist.service';
import {CartService} from '../../../../shared/services/cart.service';
import {finalize} from 'rxjs/operators';


@Component({
    selector: 'app-product-right-image',
    templateUrl: './product-right-image.component.html',
    styleUrls: ['./product-right-image.component.scss']
})
export class ProductRightImageComponent implements OnInit {
    public product: Product;
    public products: Product[] = [];
    public counter: number = 1;
    public selectedValues: SelectedCharacteristics[] = [];
    public screenWidth;
    public slideRightNavConfig;
    public slideRightConfig = {
        slidesToShow: 1,
        slidesToScroll: 2,
        arrows: true,
        fade: true,
        asNavFor: '.slider-right-nav',
        autoplay: true,
        autoplaySpeed: 2000,
        focusOnChange: true,
        swipe: true,
    };
    private loaded = false;

    // Get Product By Id
    constructor(private route: ActivatedRoute,
                private router: Router,
                public productsService: ProductsService,
                private wishlistService: WishlistService,
                private cartService: CartService) {

        this.onResize();
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            const id = +params['id'];
            this.productsService.get(id)
                .pipe(
                    finalize(() => {
                        this.loaded = true;
                    }))
                .subscribe(product => {
                    this.product = product;
                    product.productCharacteristics.forEach(pc => {
                        this.selectedValues.push({name: pc.characteristicName});
                    });
                });
        });
    }

    @HostListener('window:resize', ['$event'])
    onResize(event?) {
        this.screenWidth = window.innerWidth;
        if (this.screenWidth > 576) {
            return this.slideRightNavConfig = {
                vertical: true,
                verticalSwiping: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                asNavFor: '.product-right-slick',
                arrows: false,
                infinite: true,
                dots: false,
                centerMode: false,
                focusOnSelect: true
            };
        } else {
            return this.slideRightNavConfig = {
                vertical: false,
                verticalSwiping: false,
                slidesToShow: 3,
                slidesToScroll: 1,
                asNavFor: '.product-right-slick',
                arrows: false,
                infinite: true,
                centerMode: false,
                dots: false,
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                    }
                ]
            };
        }
    }

    public increment() {
        this.counter += 1;
    }

    public decrement() {
        if (this.counter > 1) {
            this.counter -= 1;
        }
    }


    // Add to cart
    public addToCart(product: Product, quantity) {
        if (quantity == 0) {
            return false;
        }
        this.cartService.addToCart(product, parseInt(quantity));
    }

    // Add to cart
    public buyNow(product: Product, quantity) {
        if (quantity > 0) {
            this.cartService.addToCart(product, parseInt(quantity));
        }
        this.router.navigate(['/home/checkout']);
    }

    // Add to wishlist
    public addToWishlist(product: Product) {
        this.wishlistService.addToWishlist(product);
    }

    // Change size variant
    public changeCharacteristicVariant(variant, name) {
        if (this.selectedValues !== undefined) {
            this.selectedValues.find(char => char.name === name).value = variant;
        }
        this.product.selectedCharacteristics = this.selectedValues;
    }

    public getSelectedValue(name) {
        if (this.selectedValues !== undefined) {
            return this.selectedValues.find(char => char.name === name).value;
        }
    }
}
