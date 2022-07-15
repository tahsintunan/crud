export class Blog {
    id?: string;
    title: string;
    content: string;
    created_at?: Date;
    modified_at?: Date;
    poster_id?: string;

    constructor(title: string, content: string, poster_id?: string) {
        this.title = title;
        this.content = content;
        this.poster_id = poster_id;
    }
}
