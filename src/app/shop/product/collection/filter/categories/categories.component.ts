import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {CategoryService} from '../../../../../shared/services/category.service';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
    private categories: any[];

    constructor(private categoryService: CategoryService) {
    }

    // collapse toggle
    ngOnInit() {
        $('.collapse-block-title').on('click', function (e) {
            e.preventDefault;
            var speed = 300;
            var thisItem = $(this).parent(),
                nextLevel = $(this).next('.collection-collapse-block-content');
            if (thisItem.hasClass('open')) {
                thisItem.removeClass('open');
                nextLevel.slideUp(speed);
            } else {
                thisItem.addClass('open');
                nextLevel.slideDown(speed);
            }
        });
        this.categoryService.getParents().subscribe(data => this.categories = data);

    }

    // For mobile view
    public mobileFilterBack() {
        $('.collection-filter').css('left', '-365px');
    }

}
