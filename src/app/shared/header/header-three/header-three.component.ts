import {Component, HostListener, Inject, OnDestroy, OnInit} from '@angular/core';
import {LandingFixService} from '../../services/landing-fix.service';
import {DOCUMENT} from "@angular/common";
import {WINDOW} from '../../services/windows.service';
import {CartItem} from '../../classes/cart-item';
import {CartService} from '../../services/cart.service';

declare var $: any;

@Component({
  selector: 'app-header-three',
  templateUrl: './header-three.component.html',
  styleUrls: ['./header-three.component.scss']
})
export class HeaderThreeComponent implements OnInit, OnDestroy {

  public shoppingCartItems: CartItem[] = [];

  constructor(@Inject(DOCUMENT) private document: Document,
              @Inject(WINDOW) private window, private fix: LandingFixService, private cartService: CartService) {
    this.cartService.getItems().subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
  }

  ngOnInit() {
    $.getScript('assets/js/menu.js');
  }

  ngOnDestroy() {

  }

  openNav() {
    this.fix.addNavFix();
  }

  closeNav() {
    this.fix.removeNavFix();
  }

  // @HostListener Decorator
  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    if (number >= 300) {
      this.document.getElementById("sticky").classList.add('fixed');
    } else {
      this.document.getElementById("sticky").classList.remove('fixed');
    }
  }

}
