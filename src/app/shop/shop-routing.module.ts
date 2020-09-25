import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeSixComponent} from './home-6/home-six.component';
import {CollectionNoSidebarComponent} from './product/collection/collection-no-sidebar/collection-no-sidebar.component';
import {ProductRightImageComponent} from './product/product-details/product-right-image/product-right-image.component';
import {SearchComponent} from './product/search/search.component';
import {WishlistComponent} from './product/wishlist/wishlist.component';
import {CartComponent} from './product/cart/cart.component';
import {CheckoutComponent} from './product/checkout/checkout.component';
import {SuccessComponent} from './product/success/success.component';


// Routes
const routes: Routes = [
    // Home
    {
        path: 'six',
        component: HomeSixComponent
    },
    // Product
    {
        path: 'no-sidebar/collection/:category',
        component: CollectionNoSidebarComponent
    },
    // Product Details
    {
        path: 'right-image/product/:id',
        component: ProductRightImageComponent
    },
    // Card
    {
        path: 'cart',
        component: CartComponent
    },
    // Checkout
    {
        path: 'checkout',
        component: CheckoutComponent
    },
    /**************************************/
    {
        path: 'checkout/success',
        component: SuccessComponent
    },

    {
        path: 'search',
        component: SearchComponent
    },
    {
        path: 'wishlist',
        component: WishlistComponent
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShopRoutingModule {
}
