import { Component, OnInit } from '@angular/core';
import {PostService} from '../../shared/services/post.service';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../../shared/model/post';
import {CustomMessageService} from '../../shared/services/custom-message.service';
import {AuthService} from '../../shared/services/auth.service';
import {routerTransition} from '../../router.animations';
import {CommentModel} from '../../shared/model/comment';

@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss'],
    animations: [routerTransition()]
})
export class BlankPageComponent implements OnInit {

    comments: CommentModel[] = [];

    postId: number;

    post: Post = new Post();

    comment: CommentModel = new CommentModel();

    constructor(private postService: PostService,
                private router: ActivatedRoute,
                private messageService: CustomMessageService,
                private authService: AuthService) {}

    ngOnInit() {
        this.postId = +this.router.snapshot.paramMap.get('id');
        this.loadData();
    }

    private loadData(){
        this.getPost();
        this.getAllComments();
    }
    getAllComments(){
        this.postService.getAllComentsForPost(this.postId).subscribe(data => {
            this.comments = data;
        })
    }

    getPost(){
        this.postService.getPostById(this.postId).subscribe(post => this.post = post);
    }

    createComment(){
        this.setCommentData();
        this.postService.createCommentForPost(this.postId, this.comment).subscribe(success => {
            this.messageService.showSuccessMessage('Dodano pomyślnie');
            this.getAllComments();
        },
            error2 => this.messageService.showErrorMessage('Błąd podczas dodawania.'));
    }

    isLoggedIn(){
        return this.authService.isLoggedIn();
    }

    setCommentData(){
        this.comment.email = this.authService.getUserData();
        this.comment.userId = this.authService.getUserId();
    }
}
