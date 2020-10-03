import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Product, SelectedCharacteristics} from '../../../../shared/models/product';
import {ProductsService} from '../../../../shared/services/products.service';
import {WishlistService} from '../../../../shared/services/wishlist.service';
import {CartService} from '../../../../shared/services/cart.service';
import {finalize} from 'rxjs/operators';

interface TimerFormat {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
}

@Component({
    selector: 'app-product-right-image',
    templateUrl: './product-right-image.component.html',
    styleUrls: ['./product-right-image.component.scss']
})
export class ProductRightImageComponent implements OnInit {
    public product: Product;
    public products: Product[] = [];
    public counter = 1;
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
        swipe: true,
    };
    timeLeft = 0;
    dateLeft: TimerFormat;

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
                        this.startTimer();
                    }))
                .subscribe(product => {
                    this.product = product;
                    product.productCharacteristics.forEach(pc => {
                        this.selectedValues.push({name: pc.characteristicName});
                    });
                    this.timeLeft = new Date(this.product.discount.endDate).getTime();
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

    private getDateFrom(ms): TimerFormat {

        const date_future = ms;
        const date_now = new Date().getTime();

        // get total seconds between the times
        let delta = Math.abs(date_future - date_now) / 1000;

        // calculate (and subtract) whole days
        const days = Math.floor(delta / 86400);
        delta -= days * 86400;

        // calculate (and subtract) whole hours
        const hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;

        // calculate (and subtract) whole minutes
        const minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;

        // what's left is seconds
        const seconds = Math.floor(delta % 60);

        return {
            days: days.toString().padStart(2, '0'),
            hours: hours.toString().padStart(2, '0'),
            minutes: minutes.toString().padStart(2, '0'),
            seconds: seconds.toString().padStart(2, '0'),
        };
    }

    private startTimer() {
        const timer = setInterval(() => {
            if (this.timeLeft > 0) {
                this.timeLeft--;
                this.dateLeft = this.getDateFrom(this.timeLeft);
            } else {
                clearInterval(timer);
            }
        }, 1000);
    }
}
