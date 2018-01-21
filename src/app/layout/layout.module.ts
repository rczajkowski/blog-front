import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {HeaderComponent} from './components/header/header.component';
import {GrowlModule} from 'primeng/primeng';
import { PostsByCategoryComponent } from './posts-by-category/posts-by-category.component';
import { PostsByTagComponent } from './posts-by-tag/posts-by-tag.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule.forRoot(),
        GrowlModule
    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent],
    exports: [SidebarComponent, HeaderComponent]
})
export class LayoutModule {}
