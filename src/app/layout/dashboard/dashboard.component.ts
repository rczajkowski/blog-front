import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {TagService} from '../../shared/services/tag.service';
import {PostService} from '../../shared/services/post.service';
import {Post} from '../../shared/model/post';
import {NewsletterService} from '../../shared/services/newsletter.service';
import {CustomMessageService} from '../../shared/services/custom-message.service';
import {Tag} from '../../shared/model/tag';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public sliders: Array<any> = [];

    newestPosts: Post[] = [];

    email: string;

    tags: Tag[] = [];
    constructor(private tagService: TagService,
                private postService: PostService,
                private newsletterService: NewsletterService,
                private messageService: CustomMessageService) {
        this.sliders.push(
            {
                imagePath: 'assets/images/slider1.jpg',
                label: 'First slide label',
                text:
                    'Nulla vitae elit libero, a pharetra augue mollis interdum.'
            },
            {
                imagePath: 'assets/images/slider2.jpg',
                label: 'Second slide label',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                imagePath: 'assets/images/slider3.jpg',
                label: 'Third slide label',
                text:
                    'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
            }
        );
    }

    ngOnInit() {
        this.load();
    }


    private load(){
        this.postService.getAllPosts().subscribe(posts => this.newestPosts = posts.splice(0, 4));
        this.getAllTags();
    }

    subscribeNewsletter(){
        this.newsletterService.subscribeNewsletter(this.email).subscribe(success => {
                this.messageService.showSuccessMessage('Thank You for newsletter subscription')
                this.email = '';
            },
            error => this.messageService.showErrorMessage('Something goes wrong...'));
    }

    getAllTags(){
        this.tagService.getQuntityForTag().subscribe(data => this.tags = (data.sort((tag1, tag2) => tag1.quantityOfPosts - tag2.quantityOfPosts)).reverse());
    }

    setClassForTag(tag: Tag){
        if(tag.quantityOfPosts > 6)
            return 'tag-xl';
        else if(tag.quantityOfPosts > 3 && tag.quantityOfPosts <= 6)
            return 'tag-m';
        else if(tag.quantityOfPosts <= 3)
            return 'tag-sm';
    }

}
