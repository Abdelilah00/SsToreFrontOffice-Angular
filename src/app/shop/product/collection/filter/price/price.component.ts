import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import 'rxjs/add/observable/interval';

@Component({
    selector: 'app-price',
    templateUrl: './price.component.html',
    styleUrls: ['./price.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PriceComponent implements OnInit {

    // Using Output EventEmitter
    @Output() priceFilters = new EventEmitter();

    // define min, max and range
    public min = 10;
    public max = 1000;
    public range = [10, 1000];

    constructor() {
    }

    ngOnInit() {
    }


    async onMouseUp() {
        await this.sleep(200);
        this.priceFilters.emit(this.range);
    }

    sleep(ms): any {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
