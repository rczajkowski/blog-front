import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsByCategoryComponent} from './posts-by-category.component';


const routes: Routes = [
    {
        path: '',
        component: PostsByCategoryComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostByCategoryRoutingModule { }
