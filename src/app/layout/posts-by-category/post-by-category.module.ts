import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostByCategoryRoutingModule} from './post-by-category.routing.module';
import {PostsByCategoryComponent} from './posts-by-category.component';

@NgModule({
  imports: [
    CommonModule,
      PostByCategoryRoutingModule
  ],
  declarations: [PostsByCategoryComponent]
})
export class PostByCategoryModule { }
