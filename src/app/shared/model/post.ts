import {Category} from './category';
import {Tag} from './tag';


export class Post {
    public postId: number;
    public title: string;
    public content: string;
    public date: number;
    public categories: Category [];
    public tags: Tag[];
    public briefInfo: string;

    constructor(){}

    static clone(post: Post){
        let clone = new Post();
        clone.postId = post.postId;
        clone.title = post.title;
        clone.content = post.content;
        clone.date = post.date;
        clone.categories = post.categories;
        clone.tags = post.tags;
        clone.briefInfo = post.briefInfo;

        return clone;
    }
}
