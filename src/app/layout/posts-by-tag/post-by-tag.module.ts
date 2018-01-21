import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostsByTagComponent} from './posts-by-tag.component';
import {PostByTagRoutingModule} from './post-by-tag-routing.module';

@NgModule({
    imports: [
        CommonModule,
        PostByTagRoutingModule
    ],
    declarations: [PostsByTagComponent]
})
export class PostByTagModule {
}
