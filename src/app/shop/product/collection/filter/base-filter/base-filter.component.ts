import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FilterModel, ProductTags} from '../../../../../shared/models/product';

declare var $: any;

@Component({
    selector: 'app-base-filter',
    templateUrl: './base-filter.component.html',
    styleUrls: ['./base-filter.component.scss']
})
export class BaseFilterComponent implements OnInit {

    // Using Input nad Output EventEmitter
    @Input() filter: FilterModel;
    @Output() onChangeFilter: EventEmitter<ProductTags[]> = new EventEmitter<ProductTags[]>();

    // Array
    public checkedTagsArray: any[] = [];

    constructor() {
    }

    ngOnInit() {
        this.onChangeFilter.emit(this.checkedTagsArray);   // Pass value Using emit
        $('.collapse-block-title').on('click', function (e) {
            e.preventDefault;
            const speed = 300;
            const thisItem = $(this).parent();
            const nextLevel = $(this).next('.collection-collapse-block-content');

            if (thisItem.hasClass('open')) {
                thisItem.removeClass('open');
                nextLevel.slideUp(speed);
            } else {
                thisItem.addClass('open');
                nextLevel.slideDown(speed);
            }
        });
    }

    // value checked call this function
    checkedFilter(event) {
        let index = this.checkedTagsArray.indexOf(event.target.value);  // checked and unchecked value
        if (event.target.checked) {
            this.checkedTagsArray.push(event.target.value);
        }// push in array cheked value
        else {
            this.checkedTagsArray.splice(index, 1);
        }  // removed in array unchecked value
    }
}
