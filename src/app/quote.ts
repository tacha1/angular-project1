export class Quote {

    public upvotes: number;
    public downvotes: number;

    showAuthor: boolean;
    constructor(public id: number, public quote: string, public author: string, public person: string, public completeDate: Date) {
        this.showAuthor = false;
        this.upvotes = 0;
        this.downvotes = 0;
    }
}
