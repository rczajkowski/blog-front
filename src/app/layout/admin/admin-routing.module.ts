import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {AuthGuard} from '../../shared/guard/auth.guard';
import {UserGuard} from '../../shared/guard/user.guard';
import {AddPostAdminComponent} from './posts/add-post-admin/add-post-admin.component';
import {AddTagAdminComponent} from './tags/add-tag-admin/add-tag-admin.component';
import {AddCategoryAdminComponent} from './categories/add-category-admin/add-category-admin.component';
import {AdminGuard} from '../../shared/guard/admin.guard';
import {PostDetailsComponent} from './posts/post-details/post-details.component';
import {CategoryDetailsComponent} from './categories/category-details/category-details.component';
import {TagDetailsComponent} from './tags/tag-details/tag-details.component';
import {UsersMangementComponent} from './users/users-mangement/users-mangement.component';

const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard, AdminGuard],
        children: [
            { path: '', redirectTo: '/admin/post', pathMatch: 'full'},
            { path: 'post', component: AddPostAdminComponent },
            { path: 'post/:id', component: PostDetailsComponent },
            { path: 'tag', component: AddTagAdminComponent },
            { path: 'tag/:id', component: TagDetailsComponent},
            { path: 'category', component: AddCategoryAdminComponent},
            { path: 'category/:id', component: CategoryDetailsComponent},
            { path: 'user', component: UsersMangementComponent}
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
