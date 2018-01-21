import { Component, OnInit } from '@angular/core';
import {PostService} from '../../../../shared/services/post.service';
import {CustomMessageService} from '../../../../shared/services/custom-message.service';
import {CategoryService} from '../../../../shared/services/category.service';
import {ActivatedRoute} from '@angular/router';
import {Category} from '../../../../shared/model/category';
import {Post} from '../../../../shared/model/post';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit {

    categoryId: number;

    category: Category = new Category();

    editedCategory: Category = new Category();

    posts: Post[] = [];

    constructor(private route: ActivatedRoute,
                private messageService: CustomMessageService,
                private postService: PostService,
                private categoryService: CategoryService){}

  ngOnInit() {
        this.categoryId = +this.route.snapshot.paramMap.get('id');
        this.loadData();
  }

  private loadData(){
        this.getCategory();
        this.getPostsForCategories();
  }

  private getCategory(){
        this.categoryService.getCategoryById(this.categoryId).subscribe(category =>{
            this.category = category;
            this.editedCategory = this.category;
        })
  }

  private getPostsForCategories() {
      this.categoryService.getPostsForCategoryId(this.categoryId).subscribe(posts => {
          this.posts = posts;
      })
  }
}
