import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SubscriptionsService} from '../../services/subscriptions.service';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-footer-four',
    templateUrl: './footer-four.component.html',
    styleUrls: ['./footer-four.component.scss']
})
export class FooterFourComponent implements OnInit {
    formGroup: FormGroup = new FormGroup({
        email: new FormControl('@gmail.com', Validators.email)
    });

    constructor(private subscriptionsService: SubscriptionsService,
                private toasterService: ToastrService) {
    }

    ngOnInit() {
    }

    subscribe(): void {
        this.subscriptionsService.create(this.formGroup.value)
            .subscribe((response) => {
                this.toasterService.success('You are subscribed');
            }, (error) => {
                this.toasterService.error(error.error.message);
            });
    }

}
