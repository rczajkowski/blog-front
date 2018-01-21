import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {JwtHelper} from 'angular2-jwt';
import {Http} from '@angular/http';

@Injectable()
export class AuthService {

    jwtHelper;

    constructor(private router: Router, private http: HttpClient, private HTTP: Http) {
        this.jwtHelper = new JwtHelper();
    }

    login(loginData) {
        this.http.post('/api/users/login', loginData, {responseType: 'text'}).subscribe(data => this.saveToken(data));
    }

    saveToken(token) {
        localStorage.setItem('access_token', token);
        this.router.navigate(['/dashboard']);
    }

    getUserId(){
        return this.jwtHelper.decodeToken(this.getAccessToken())['jti'];
    }

    private getRole(){
        if(this.isLoggedIn())
            return this.jwtHelper.decodeToken(this.getAccessToken())['role'][0];
    }

    isLoggedIn(){
        return this.getAccessToken() != null;
    }

    private getAccessToken(){
        return localStorage.getItem('access_token');
    }

    logout(){
        localStorage.removeItem('access_token');
        this.router.navigate(['/dashboard'])
    }

    isAdmin(): boolean{
        if(this.isLoggedIn())
            return this.getRole() == 'ROLE_ADMIN';
    }

    isUser() : boolean{
        if(this.isLoggedIn())
            return this.getRole() == 'ROLE_USER';
    }

    getUserData(){
        if(this.isLoggedIn())
            return this.jwtHelper.decodeToken(this.getAccessToken())['sub'];
    }
}
