import {Component, OnInit, ViewChild} from '@angular/core';
import { routerTransition } from '../router.animations';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../shared/services/user.service';
import {CustomMessageService} from '../shared/services/custom-message.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {

    signUpData = {email: '', password: '', confirmPassword: ''};

    @ViewChild('singUpForm')
    singUpForm: FormBuilder;

    constructor(private userService: UserService, private messageService: CustomMessageService, private router: Router) {}

    ngOnInit() {

    }

    isCorrectPassword(){
        return this.signUpData.password != this.signUpData.confirmPassword;
    }

    signUp(){
        this.userService.signUp(this.signUpData).subscribe(success => {
            this.messageService.showSuccessMessage('Zarejstrowano pomyślnie!');
            this.router.navigate(['/login']);
        }, error => this.messageService.showErrorMessage('Błąd podczas rejestracji'));
    }
}
