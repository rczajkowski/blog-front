import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'support', loadChildren: './donators/donators.module#DonatorsModule' },
            { path: 'posts/:id', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'category/:id', loadChildren: './posts-by-category/post-by-category.module#PostByCategoryModule' },
            { path: 'tags/:id', loadChildren: './posts-by-tag/post-by-tag.module#PostByTagModule'}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
