import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ShopRoutingModule} from './shop-routing.module';
import {SharedModule} from '../shared/shared.module';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {BarRatingModule} from 'ngx-bar-rating';
import {RangeSliderModule} from 'ngx-rangeslider-component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {NgxPayPalModule} from 'ngx-paypal';
import {NgxImgZoomModule} from 'ngx-img-zoom';
// Home-six components
import {HomeSixComponent} from './home-6/home-six.component';
import {SliderSixComponent} from './home-6/slider/slider.component';
import {CollectionBannerSixComponent} from './home-6/collection-banner/collection-banner.component';
import {ProductTabSixComponent} from './home-6/product-tab/product-tab.component';
import {ParallaxBannerSixComponent} from './home-6/parallax-banner/parallax-banner.component';
import {BlogSixComponent} from './home-6/blog/blog.component';
// Products Components
import {ProductComponent} from './product/product.component';
import {ProductBoxComponent} from './product/product-box/product-box.component';
import {ProductBoxHoverComponent} from './product/product-box-hover/product-box-hover.component';
import {ProductBoxVerticalComponent} from './product/product-box-vertical/product-box-vertical.component';
import {ProductBoxMetroComponent} from './product/product-box-metro/product-box-metro.component';
import {CollectionNoSidebarComponent} from './product/collection/collection-no-sidebar/collection-no-sidebar.component';
import {ColorComponent} from './product/collection/filter/color/color.component';
import {BrandComponent} from './product/collection/filter/brand/brand.component';
import {PriceComponent} from './product/collection/filter/price/price.component';
import {ProductRightImageComponent} from './product/product-details/product-right-image/product-right-image.component';
import {RelatedProductsComponent} from './product/product-details/related-products/related-products.component';
import {SidebarComponent} from './product/product-details/sidebar/sidebar.component';
import {CategoriesComponent} from './product/widgets/categories/categories.component';
import {QuickViewComponent} from './product/widgets/quick-view/quick-view.component';
import {ModalCartComponent} from './product/widgets/modal-cart/modal-cart.component';
import {NewProductComponent} from './product/widgets/new-product/new-product.component';
import {SearchComponent} from './product/search/search.component';
import {WishlistComponent} from './product/wishlist/wishlist.component';
import {CartComponent} from './product/cart/cart.component';
import {CheckoutComponent} from './product/checkout/checkout.component';
import {SuccessComponent} from './product/success/success.component';
import {ExitPopupComponent} from './product/widgets/exit-popup/exit-popup.component';
import {AgeVerificationComponent} from './product/widgets/age-verification/age-verification.component';
import {NewsletterComponent} from './product/widgets/newsletter/newsletter.component';
import {ErrorPageComponent} from '../pages/error-page/error-page.component';


@NgModule({

    exports: [ExitPopupComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ShopRoutingModule,
        SharedModule,
        SlickCarouselModule,
        BarRatingModule,
        RangeSliderModule,
        InfiniteScrollModule,
        NgxPayPalModule,
        NgxImgZoomModule,
    ],
    declarations: [

        // Home Six
        HomeSixComponent,
        SliderSixComponent,
        CollectionBannerSixComponent,
        ProductTabSixComponent,
        ParallaxBannerSixComponent,
        BlogSixComponent,
        // Product
        ProductComponent,
        ProductBoxComponent,
        ProductBoxHoverComponent,
        ProductBoxVerticalComponent,
        ProductBoxMetroComponent,
        CollectionNoSidebarComponent,
        ColorComponent,
        BrandComponent,
        PriceComponent,
        ProductRightImageComponent,
        RelatedProductsComponent,
        SidebarComponent,
        CategoriesComponent,
        QuickViewComponent,
        ModalCartComponent,
        NewProductComponent,
        SearchComponent,
        WishlistComponent,
        CartComponent,
        CheckoutComponent,
        SuccessComponent,
        ExitPopupComponent,
        AgeVerificationComponent,
        NewsletterComponent,
        ErrorPageComponent,
    ]
})
export class ShopModule {
}
