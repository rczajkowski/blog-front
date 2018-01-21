import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../model/post';
import {CommentModel} from '../model/comment';

@Injectable()
export class PostService {

    constructor(private http: HttpClient) {
    }

    getAllPosts() {
        return this.http.get<Post[]>('/api/posts');
    }

    createPost(post: Post) {
        return this.http.post('/api/posts', post);
    }

    getPostById(postId: number) {
        return this.http.get<Post>('/api/posts/' + postId);
    }

    deletePostById(postId: number) {
        return this.http.delete('/api/posts/' + postId);
    }

    updatePostById(postId: number, post: Post) {
        return this.http.put('/api/posts/' + postId, post);
    }

    getAllComentsForPost(postId: number){
        return this.http.get<CommentModel[]>('/api/posts/' + postId + '/comments');
    }

    createCommentForPost(postId: number, comment: CommentModel){
        return this.http.post('/api/posts/' + postId + '/comments', comment);
    }
}
