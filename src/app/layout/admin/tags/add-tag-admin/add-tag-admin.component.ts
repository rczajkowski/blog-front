import {Component, OnInit, ViewChild} from '@angular/core';
import {TagService} from '../../../../shared/services/tag.service';
import {Tag} from '../../../../shared/model/tag';
import {CustomMessageService} from '../../../../shared/services/custom-message.service';
import {FormGroup} from '@angular/forms';

@Component({
    selector: 'app-add-tag-admin',
    templateUrl: './add-tag-admin.component.html',
    styleUrls: ['./add-tag-admin.component.scss']
})
export class AddTagAdminComponent implements OnInit {

    allTags: Tag[] = [];

    tag: Tag = new Tag();

    @ViewChild('tagForm')
    tagForm: FormGroup;

    constructor(private tagService: TagService, private messageService: CustomMessageService) {
    }

    ngOnInit() {
        this.getAllTags();
    }

    private getAllTags() {
        this.tagService.getAllTags().subscribe(data => this.allTags = data);
    }

    createTag(){
        this.tagService.createTag(this.tag).subscribe(success =>{
            this.messageService.showSuccessMessage('Dodano pomyślnie.');
            this.tagForm.reset();
            this.getAllTags();
        }, error2 => this.messageService.showErrorMessage('Błąd podczas dodawania.'));
    }

    deleteTag(tagId: number){
        this.tagService.deleteTagById(tagId).subscribe(success => {
            this.messageService.showSuccessMessage("Usunięto pomyślnie.");
            this.getAllTags();
        },
            error2 => this.messageService.showErrorMessage("Błąd podczas usuwania."))
    }
}
