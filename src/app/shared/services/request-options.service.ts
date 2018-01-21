import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth.service';

@Injectable()
export class RequestOptionsService {

    constructor() {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(localStorage.getItem('access_token')) {
            req = req.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + localStorage.getItem('access_token')
                }
            });
        }
        return next.handle(req);
    }

}
