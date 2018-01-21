import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from '../model/category';
import {Post} from '../model/post';

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }

    getAllCategories() {
        return this.http.get<Category []>('/api/categories');
    }

    createCategory(category: Category) {
        return this.http.post('/api/categories', category);
    }

    getCategoryById(categoryId: number) {
        return this.http.get<Category>('/api/categories/' + categoryId);
    }

    deleteCategoryById(categoryId: number) {
        return this.http.delete('/api/categories/' + categoryId);
    }

    updateCategoryById(categoryId: number, category: Category) {
        return this.http.put('/api/categories/' + categoryId, category);
    }

    getPostsForCategoryId(categoryId: number){
      return this.http.get<Post[]>('/api/categories/' + categoryId + '/posts');
    }

}
