import {Component, OnInit} from '@angular/core';
import {PostService} from '../../shared/services/post.service';
import {TagService} from '../../shared/services/tag.service';
import {Post} from '../../shared/model/post';
import {Tag} from '../../shared/model/tag';
import {CustomMessageService} from '../../shared/services/custom-message.service';
import {ActivatedRoute} from '@angular/router';
import {routerTransition} from '../../router.animations';

@Component({
    selector: 'app-posts-by-tag',
    templateUrl: './posts-by-tag.component.html',
    styleUrls: ['./posts-by-tag.component.scss'],
    animations: [routerTransition()]
})
export class PostsByTagComponent implements OnInit {

    tagId: number;

    tag: Tag = new Tag();

    posts: Post[] = [];

    constructor(private route: ActivatedRoute,
                private messageService: CustomMessageService,
                private postService: PostService,
                private tagService: TagService){}

    ngOnInit() {
        this.tagId = +this.route.snapshot.paramMap.get('id');
        this.loadData();
    }

    private loadData(){
        this.getTag();
        this.getPostsByTag();
    }

    private getTag(){
        this.tagService.getTagById(this.tagId).subscribe(tag =>{
            this.tag = tag;
        })
    }

    private getPostsByTag() {
        this.tagService.getPostsByTagId(this.tagId).subscribe(posts => {
            this.posts = posts;
        })
    }
}
