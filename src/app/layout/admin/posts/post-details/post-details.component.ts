import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CustomMessageService} from '../../../../shared/services/custom-message.service';
import {Post} from '../../../../shared/model/post';
import {PostService} from '../../../../shared/services/post.service';
import {CategoryService} from '../../../../shared/services/category.service';
import {TagService} from '../../../../shared/services/tag.service';
import {SelectItem} from 'primeng/primeng';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

    postId: number;

    post: Post = new Post();

    editedPost: Post = new Post();

    tagsSelect: SelectItem[] = [];

    categoriesSelect: SelectItem[] = [];

    constructor(private route: ActivatedRoute,
                private messageService: CustomMessageService,
                private postService: PostService,
                private categoryService: CategoryService,
                private tagService: TagService){}


    ngOnInit() {
        this.postId = +this.route.snapshot.paramMap.get('id');
        this.loadData();
    }
    private loadData(){
        this.getAllCategories();
        this.getAllTags();
        this.getPost()
    }
    private getPost(){
        this.postService.getPostById(this.postId).subscribe(post =>{
            this.post = post;
            this.editedPost = Post.clone(this.post)
        })
    }

    updatePost(){
        this.postService.updatePostById(this.postId, this.editedPost).subscribe(success =>{
            this.post = success as Post;
            this.editedPost = Post.clone(this.post);
            this.messageService.showSuccessMessage("Zaktualizowano pomyślnie");
        }, error => this.messageService.showErrorMessage("Błąd podczas aktualizacji"))
    }

    private getAllCategories(){
        this.categoryService.getAllCategories().subscribe(data => {
            data.forEach(category => this.categoriesSelect.push({label: category.name, value: category}));
        })
    }

    private getAllTags(){
        this.tagService.getAllTags().subscribe(data => {
            data.forEach(tag => this.tagsSelect.push({label: tag.tagName, value: tag}));
        })
    }


}
