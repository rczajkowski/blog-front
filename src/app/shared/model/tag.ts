import {Post} from './post';

export class Tag {
    constructor(){}

    public tagId: number;
    public tagName: string;
    public quantityOfPosts: number;

    static clone(tag: Tag){
        let clone = new Tag();
        clone.tagId = tag.tagId;
        clone.tagName = tag.tagName;

        return clone;
    }
}
