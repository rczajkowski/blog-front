import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {CustomMessageService} from '../../../../shared/services/custom-message.service';
import {Category} from '../../../../shared/model/category';
import {CategoryService} from '../../../../shared/services/category.service';

@Component({
  selector: 'app-add-category-admin',
  templateUrl: './add-category-admin.component.html',
  styleUrls: ['./add-category-admin.component.scss']
})
export class AddCategoryAdminComponent implements OnInit {


    allCategories: Category[] = [];

    category: Category = new Category();

    @ViewChild('categoryForm')
    categoryForm: FormGroup;

    constructor(private categoryService: CategoryService, private messageService: CustomMessageService) {
    }

    ngOnInit() {
        this.getAllCategories();
    }

    private getAllCategories() {
        this.categoryService.getAllCategories().subscribe(data => this.allCategories = data);
    }

    createCategory(){
        this.categoryService.createCategory(this.category).subscribe(success =>{
            this.messageService.showSuccessMessage('Dodano pomyślnie');
            this.categoryForm.reset();
            this.getAllCategories();
        }, error2 => this.messageService.showErrorMessage('Błąd podczas dodawania'));
    }

    deleteCategory(categoryId: number){
        this.categoryService.deleteCategoryById(categoryId).subscribe(success => {
            this.messageService.showSuccessMessage('Usunięto pomyślnie.');
            this.getAllCategories();
        }, error2 => this.messageService.showErrorMessage('Błąd podczas usuwania.'));
    }

}
