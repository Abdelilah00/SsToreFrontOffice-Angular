import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
// Services
import {WINDOW_PROVIDERS} from './services/windows.service';
import {LandingFixService} from '../shared/services/landing-fix.service';
import {InstagramService} from './services/instagram.service';
import {ProductsService} from './services/products.service';
import {WishlistService} from './services/wishlist.service';
import {CartService} from './services/cart.service';
import {OrderService} from './services/order.service';
import {PaginationService} from './models/paginate';
// Pipes
import {OrderByPipe} from './pipes/order-by.pipe';
// components
import {HeaderFiveComponent} from './header/header-five/header-five.component';
import {LeftSidebarComponent} from './header/left-sidebar/left-sidebar.component';
import {TopbarOneComponent} from './header/widgets/topbar/topbar-one/topbar-one.component';
import {TopbarTwoComponent} from './header/widgets/topbar/topbar-two/topbar-two.component';
import {NavbarComponent} from './header/widgets/navbar/navbar.component';
import {SettingsComponent} from './header/widgets/settings/settings.component';
import {LeftMenuComponent} from './header/widgets/left-menu/left-menu.component';
import {FooterFourComponent} from './footer/footer-four/footer-four.component';
import {InformationComponent} from './footer/widgets/information/information.component';
import {CategoriesComponent} from './footer/widgets/categories/categories.component';
import {WhyWeChooseComponent} from './footer/widgets/why-we-choose/why-we-choose.component';
import {CopyrightComponent} from './footer/widgets/copyright/copyright.component';
import {SocialComponent} from './footer/widgets/social/social.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CategoryService} from './services/category.service';
import {ReviewsService} from './services/reviews.service';
import {SafeUrlPipe} from './pipes/safe-url.pipe';

@NgModule({
    exports: [
        CommonModule,
        TranslateModule,
        HeaderFiveComponent,
        LeftSidebarComponent,

        FooterFourComponent,
        OrderByPipe,
        SafeUrlPipe
    ],
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule,
        ReactiveFormsModule,
    ],
    declarations: [

        HeaderFiveComponent,
        LeftSidebarComponent,

        FooterFourComponent,
        OrderByPipe,
        NavbarComponent,
        SettingsComponent,
        LeftMenuComponent,
        TopbarOneComponent,
        TopbarTwoComponent,
        InformationComponent,
        CategoriesComponent,
        WhyWeChooseComponent,
        CopyrightComponent,
        SocialComponent,
        SafeUrlPipe
    ],
    providers: [
        WINDOW_PROVIDERS,
        LandingFixService,
        InstagramService,
        ProductsService,
        CategoryService,
        OrderService,
        ReviewsService,
        WishlistService,
        CartService,
        PaginationService,
    ]
})
export class SharedModule {
}
