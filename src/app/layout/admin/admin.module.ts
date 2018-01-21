import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {LayoutModule} from '../layout.module';
import {CalendarModule, FieldsetModule, GrowlModule, MultiSelectModule} from 'primeng/primeng';
import {AddPostAdminComponent} from './posts/add-post-admin/add-post-admin.component';
import {FormsModule} from '@angular/forms';
import {PostService} from '../../shared/services/post.service';
import { AddTagAdminComponent } from './tags/add-tag-admin/add-tag-admin.component';
import {TagService} from '../../shared/services/tag.service';
import { AddCategoryAdminComponent } from './categories/add-category-admin/add-category-admin.component';
import {CategoryService} from '../../shared/services/category.service';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { CategoryDetailsComponent } from './categories/category-details/category-details.component';
import { TagDetailsComponent } from './tags/tag-details/tag-details.component';
import { UsersMangementComponent } from './users/users-mangement/users-mangement.component';
import { DonatorManagementComponent } from './donators/donator-management/donator-management.component';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,
        LayoutModule,
        FieldsetModule,
        FormsModule,
        CalendarModule,
        MultiSelectModule,
        GrowlModule

     ],
    declarations: [
        AdminComponent,
        AddPostAdminComponent,
        AddTagAdminComponent,
        AddCategoryAdminComponent,
        PostDetailsComponent,
        CategoryDetailsComponent,
        TagDetailsComponent,
        UsersMangementComponent,
        DonatorManagementComponent
    ],
    providers: [
        PostService,
        TagService,
        CategoryService
    ]
})
export class AdminModule {
}
