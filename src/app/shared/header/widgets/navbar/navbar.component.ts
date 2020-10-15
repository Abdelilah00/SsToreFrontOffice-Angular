import {Component, OnInit} from '@angular/core';
import {Menu} from './navbar-items';
import {CategoryService} from '../../../services/category.service';

declare var $: any;

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    public menuItems = new Array<Menu>();

    constructor(private categoryService: CategoryService) {
    }

    ngOnInit() {
        this.menuItems.push({
            name: 'shop',
            type: 'sub',
            megaMenu: true,
            megaMenuType: 'large',
            children: []
        });

        this.categoryService.getTree().subscribe(data => {
            let categories = data as Menu[];
            categories.forEach(category => {
                category.type = 'link';
                category.path = '/home/no-sidebar/collection';
                category.categoryId = category.id;

                category.children.forEach(subCategory => {
                    subCategory.type = 'link';
                    subCategory.path = '/home/no-sidebar/collection';
                    subCategory.categoryId = subCategory.id;
                });
            });
            this.menuItems[0].children = categories;
        });
    }


}
