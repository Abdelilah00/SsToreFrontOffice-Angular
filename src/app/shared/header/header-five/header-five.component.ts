import {Component, Inject, OnInit} from '@angular/core';
import {LandingFixService} from '../../services/landing-fix.service';
import {DOCUMENT} from '@angular/common';
import {WINDOW} from '../../services/windows.service';
import {CartItem} from '../../models/cart-item';
import {CartService} from '../../services/cart.service';
import {Router} from '@angular/router';

declare var $: any;

@Component({
    selector: 'app-header-five',
    templateUrl: './header-five.component.html',
    styleUrls: ['./header-five.component.scss']
})
export class HeaderFiveComponent implements OnInit {

    public shoppingCartItems: CartItem[] = [];


    constructor(@Inject(DOCUMENT) private document: Document,
                @Inject(WINDOW) private window,
                private fix: LandingFixService,
                private cartService: CartService,
                private route: Router) {

    }

    // TODO: add onchange Event
    // TODO: add getByName

    ngOnInit() {
        this.cartService.getItems().subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
        $.getScript('assets/js/menu.js');
    }

    getByQuery(query: string) {
        this.route.navigate(['/home/search'], {queryParams: {query: query}});
    }

    openNav() {
        this.fix.addNavFix();
    }

    closeNav() {
        this.fix.removeNavFix();
    }

}
