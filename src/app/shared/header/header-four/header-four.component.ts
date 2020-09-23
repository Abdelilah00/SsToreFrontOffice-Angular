import {Component, OnInit} from '@angular/core';
import {LandingFixService} from '../../services/landing-fix.service';
import {CartItem} from '../../models/cart-item';
import {CartService} from '../../services/cart.service';

declare var $: any;

@Component({
  selector: 'app-header-four',
  templateUrl: './header-four.component.html',
  styleUrls: ['./header-four.component.scss']
})
export class HeaderFourComponent implements OnInit {

  public shoppingCartItems: CartItem[] = [];

  constructor(private fix: LandingFixService, private cartService: CartService) {
    this.cartService.getItems().subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
  }

  ngOnInit() {
    $.getScript('assets/js/menu.js');
  }

  openNav() {
    this.fix.addNavFix();
  }

  closeNav() {
    this.fix.removeNavFix();
  }


}
