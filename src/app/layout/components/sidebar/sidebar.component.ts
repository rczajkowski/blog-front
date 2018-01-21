import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {AuthService} from '../../../shared/services/auth.service';
import {CategoryService} from '../../../shared/services/category.service';
import {Category} from '../../../shared/model/category';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
    isActive: boolean = false;
    showMenu: string = '';
    pushRightClass: string = 'push-right';

    categories: Category[] = [];

    constructor(public router: Router, private authService: AuthService, private categoryService: CategoryService) {
        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit(){
        this.getAllCategories();
    }

    getAllCategories(){
        this.categoryService.getAllCategories().subscribe(categories => {
            this.categories = categories;
        })
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    isLogged(){
        return this.authService.isLoggedIn();
    }

    onLoggedout(){
        this.showMenu = '';
        this.authService.logout();
    }

    getUserData(){
        return this.authService.getUserData();
    }

    isAdmin(){
        return this.authService.isAdmin();
    }

    isAdminSite(){
        return this.router.url.indexOf('admin') > 0;
    }
}
