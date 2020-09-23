import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../../../../shared/services/products.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar-one.component.html',
  styleUrls: ['./topbar-one.component.scss']
})
export class TopbarOneComponent implements OnInit {

  constructor(public productsService: ProductsService) {
  }

  ngOnInit() {
  }

}
