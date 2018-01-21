import { Component, OnInit } from '@angular/core';
import {Category} from '../../../../shared/model/category';
import {Post} from '../../../../shared/model/post';
import {PostService} from '../../../../shared/services/post.service';
import {CustomMessageService} from '../../../../shared/services/custom-message.service';
import {CategoryService} from '../../../../shared/services/category.service';
import {ActivatedRoute} from '@angular/router';
import {Tag} from '../../../../shared/model/tag';
import {TagService} from '../../../../shared/services/tag.service';

@Component({
  selector: 'app-tag-details',
  templateUrl: './tag-details.component.html',
  styleUrls: ['./tag-details.component.scss']
})
export class TagDetailsComponent implements OnInit {

    tagId: number;

    tag: Tag = new Tag();

    editedTag: Tag = new Tag();

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
            this.editedTag = Tag.clone(this.tag);
        })
    }

    private getPostsByTag() {
        this.tagService.getPostsByTagId(this.tagId).subscribe(posts => {
            this.posts = posts;
        })
    }

    private updateTag(){
        this.tagService.updateTagById(this.tagId, this.editedTag).subscribe(success => {
            this.tag = success as Tag;
            this.editedTag = Tag.clone(this.tag);
            this.messageService.showSuccessMessage('Pomyslnie zaktualizowano');
        },
            error2 => this.messageService.showErrorMessage('Błąd podczas aktualizacji'));
    }

}
