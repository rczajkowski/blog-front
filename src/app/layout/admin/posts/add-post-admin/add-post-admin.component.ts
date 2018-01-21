import {Component, OnInit, ViewChild} from '@angular/core';
import {Post} from '../../../../shared/model/post';
import {PostService} from '../../../../shared/services/post.service';
import {CustomMessageService} from '../../../../shared/services/custom-message.service';
import {TagService} from '../../../../shared/services/tag.service';
import {CategoryService} from '../../../../shared/services/category.service';
import {SelectItem} from 'primeng/primeng';
import {FormGroup} from '@angular/forms';
import {isNullOrUndefined} from 'util';

@Component({
    selector: 'app-add-post-admin',
    templateUrl: './add-post-admin.component.html',
    styleUrls: ['./add-post-admin.component.scss']
})
export class AddPostAdminComponent implements OnInit {

    post = new Post();

    allPosts: Post[] = [];

    tagsSelect: SelectItem[] = [];

    categoriesSelect: SelectItem[] = [];

    @ViewChild('postForm')
    postForm: FormGroup;

    constructor(private postService: PostService,
                private messageService: CustomMessageService,
                private tagService: TagService,
                private categoryService: CategoryService) {
    }

    ngOnInit() {
        this.getAllPosts()
    }

    getAllPosts(){
        this.postService.getAllPosts().subscribe( data => this.allPosts = data);
        this.getAllCategories();
        this.getAllTags();
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

    createPost(){
        this.postService.createPost(this.post).subscribe(success => {
            this.messageService.showSuccessMessage('Dodano pomyslnie');
            this.getAllPosts();
            this.postForm.reset();
        }, error2 => {
            this.messageService.showErrorMessage('Błąd podczas dodawania.');
        })
    }

    deletePost(postId: number){
        this.postService.deletePostById(postId).subscribe(succes => {
            this.messageService.showSuccessMessage("Usunięto pomyślnie");
            this.getAllPosts();
        },
            error2 => this.messageService.showErrorMessage("Błąd podczas usuwania"));
    }

    isInvalid(){
        return isNullOrUndefined(this.post.tags) || isNullOrUndefined(this.post.categories);
    }
}
