import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  signUp(data){
      return this.http.post('/api/users/sign-up', data);
  }

  getAllUsers(){
      return this.http.get('/api/users');
  }

  lockUser(userId: number){
      let httpParams = new HttpParams().append('isEnable', 'false');
      return this.http.post('/api/users/' + userId + '/enable', null, {params: httpParams });
  }

  unlockUser(userId: number){
      let httpParams = new HttpParams().append('isEnable', 'true');
      return this.http.post('/api/users/' + userId + '/enable', null, {params: httpParams });
  }
}
