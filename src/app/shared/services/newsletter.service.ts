import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class NewsletterService {

    constructor(private http: HttpClient) {
    }

    subscribeNewsletter(email: string){
        let httpParmas = new HttpParams().append("email", email);
        return this.http.post('/api/newsletter', null, {params: httpParmas});
    }

    unsubscribe(email: string){
        return this.http.delete('/api/newsletter/' + email);
    }
}
