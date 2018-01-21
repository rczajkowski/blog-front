import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Tag} from '../model/tag';
import {Post} from '../model/post';

@Injectable()
export class TagService {

    constructor(private http: HttpClient) {
    }

    getAllTags() {
        return this.http.get<Tag []>('/api/tags');
    }

    createTag(tag: Tag) {
        return this.http.post('/api/tags', tag);
    }

    getTagById(tagId: number) {
        return this.http.get<Tag>('/api/tags/' + tagId);
    }

    deleteTagById(tagId: number) {
        return this.http.delete('/api/tags/' + tagId);
    }

    updateTagById(tagId: number, tag: Tag) {
        return this.http.put('/api/tags/' + tagId, tag);
    }

    getPostsByTagId(tagId: number){
        return this.http.get<Post[]>('/api/tags/' + tagId + '/posts');
    }

    getQuntityForTag(){
        return this.http.get<Tag[]>('/api/tags/clouds');
    }
}
