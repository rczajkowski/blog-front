import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Donator} from '../model/donator';

@Injectable()
export class DonatorService {

    constructor(private http: HttpClient) {
    }

    getAllDonators(){
        return this.http.get<Donator[]>('/api/donators');
    }

    createDonator(donator: Donator){
        return this.http.post('/api/donators', donator);
    }

}
