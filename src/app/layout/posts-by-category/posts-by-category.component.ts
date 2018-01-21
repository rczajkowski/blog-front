import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../shared/services/category.service';
import {Post} from '../../shared/model/post';
import {ActivatedRoute} from '@angular/router';
import {routerTransition} from '../../router.animations';
import {Category} from '../../shared/model/category';

@Component({
    selector: 'app-posts-by-category',
    templateUrl: './posts-by-category.component.html',
    styleUrls: ['./posts-by-category.component.scss'],
    animations: [routerTransition()]
})
export class PostsByCategoryComponent implements OnInit {

    categoryId: number;

    category: Category = new Category();

    posts: Post[] = [];


    constructor(private categoryService: CategoryService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.categoryId = +this.route.snapshot.paramMap.get('id');
        this.getCategoryById();
        this.getAllPostForCategory();

    }

    getAllPostForCategory() {
        this.categoryService.getPostsForCategoryId(this.categoryId).subscribe(posts => {
            this.posts = posts;
        });
    }

    getCategoryById(){
        this.categoryService.getCategoryById(this.categoryId).subscribe(category => this.category = category);
    }

}
