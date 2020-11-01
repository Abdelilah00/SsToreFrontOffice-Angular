import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FilterModel} from '../../../../../shared/models/product';

declare var $: any;

@Component({
    selector: 'app-base-filter',
    templateUrl: './base-filter.component.html',
    styleUrls: ['./base-filter.component.scss']
})
export class BaseFilterComponent implements OnInit {

    // Using Input nad Output EventEmitter
    @Input() filter: FilterModel;
    @Output() onChangeFilter: EventEmitter<any> = new EventEmitter<any>();

    // Array
    public checkedTagsArray: any[] = [];

    constructor() {
    }

    ngOnInit() {

    }

    // value checked call this function
    checkedFilter(event) {
        const index = this.checkedTagsArray.indexOf(event.target.value);
        if (event.target.checked) {
            this.checkedTagsArray.push(event.target.value);
        } else {
            this.checkedTagsArray.splice(index, 1);
        }

        this.onChangeFilter.emit({name: this.filter.name, values: this.checkedTagsArray});
    }
}
