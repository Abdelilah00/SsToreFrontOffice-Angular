import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import * as $ from 'jquery';
import {CategoryService} from '../../../../../shared/services/category.service';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
    categories: any[];
    @Output() onSelectCategory: EventEmitter<any> = new EventEmitter<any>();

    constructor(private categoryService: CategoryService) {
    }

    // collapse toggle
    ngOnInit() {
        this.categoryService.getParents().subscribe(data => {
            this.categories = data;
            this.sleep(100).then(() => this.addClickEventListener());
        });

    }

    sleep(ms): any {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    addClickEventListener(): void {
        //TODO: setDefaultSelect
        $('li>a').click(function () {
            $('.selectedCategory').removeClass('selectedCategory');
            $(this).addClass('selectedCategory');
        });
    }

    // For mobile view
    public mobileFilterBack() {
        $('.collection-filter').css('left', '-365px');
    }

    newCategorySelect(): void {
        const category = document.getElementsByClassName('selectedCategory');
        if (category != null || undefined) {
            this.onSelectCategory.emit(category.item(0).innerHTML);
        }
    }
}
