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
    mouseUp = false;

    constructor() {
    }

    ngOnInit() {
    }

    // rangeChanged
    async priceChanged() {
        await this.sleep(200);
        if (this.mouseUp) {
            this.priceFilters.emit(this.range);
            this.mouseUp = false;
        }
    }

    onMouseUp(): void {
        this.mouseUp = true;
        this.priceChanged();
    }

    sleep(ms): any {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
