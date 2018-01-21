import {Component, OnInit, ViewChild} from '@angular/core';
import {Donator} from '../../shared/model/donator';
import {DonatorService} from '../../shared/services/donator.service';
import {CustomMessageService} from '../../shared/services/custom-message.service';
import {FormGroup} from '@angular/forms';
import {routerTransition} from '../../router.animations';

@Component({
    selector: 'app-donators',
    templateUrl: './donators.component.html',
    styleUrls: ['./donators.component.scss'],
    animations: [routerTransition()]
})
export class DonatorsComponent implements OnInit {

    donator: Donator = new Donator();

    donators: Donator[] = [];

    @ViewChild('donatorForm')
    donatorForm: FormGroup;

    constructor(private donatorService: DonatorService,
                private messageService: CustomMessageService) {
    }

    ngOnInit() {
        this.getAllDonators()
    }

    getAllDonators(){
        this.donatorService.getAllDonators().subscribe(donators => {
            this.donators = donators;
        })
    }

    createDonator(){
        this.donatorService.createDonator(this.donator).subscribe(success => {
            this.messageService.showSuccessMessage('Dziękujemy za wsparcie!');
            this.getAllDonators();
            this.donatorForm.reset();
        },
            error2 => this.messageService.showErrorMessage('Coś poszło nie tak....'))
    }

}
