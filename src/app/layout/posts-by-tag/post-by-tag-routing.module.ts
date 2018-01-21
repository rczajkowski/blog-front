import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsByCategoryComponent} from '../posts-by-category/posts-by-category.component';
import {PostsByTagComponent} from './posts-by-tag.component';

const routes: Routes = [
    {
        path: '',
        component: PostsByTagComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostByTagRoutingModule { }
