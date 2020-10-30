import {Component, OnInit} from '@angular/core';
import {Product} from '../../../../shared/models/product';
import {ProductsService} from '../../../../shared/services/products.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  public products: Product[] = [];

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.productsService.getNewest().subscribe(product => this.products = product);
  }

}
