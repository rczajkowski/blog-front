import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import {AuthService} from '../shared/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    loginData = {email: '', password: ''}

    constructor(public router: Router, private authService: AuthService) {}

    ngOnInit() {}

    onLoggedin() {
        this.authService.login(this.loginData);
    }
}
