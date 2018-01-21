import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../shared/services/user.service';
import {User} from '../../../../shared/model/user';
import {CustomMessageService} from '../../../../shared/services/custom-message.service';

@Component({
    selector: 'app-users-mangement',
    templateUrl: './users-mangement.component.html',
    styleUrls: ['./users-mangement.component.scss']
})
export class UsersMangementComponent implements OnInit {

    users: User[] = [];

    constructor(private userService: UserService,
                private messageService: CustomMessageService) {
    }

    ngOnInit() {
        this.loadData();
    }

    private loadData(){
        this.getAllUsers();
    }

    private getAllUsers(){
        this.userService.getAllUsers().subscribe(data => this.users = data as User[]);
    }

    lockUser(userId: number){
        this.userService.lockUser(userId).subscribe(success =>{
            this.messageService.showSuccessMessage('Użytkownik został zablokowany');
            this.loadData();
        },
        error2 =>  console.log(error2));
    }

    unlockUser(userId: number){
        this.userService.unlockUser(userId).subscribe(success =>{
            this.messageService.showSuccessMessage('Użytkownik został odblokowany');
            this.loadData();
        })
    }

}
