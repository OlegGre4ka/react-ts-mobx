import { makeAutoObservable } from "mobx";


class Posts {
    posts = [];

    constructor() {
        makeAutoObservable(this)
    }
    getAllPosts(data) {
        this.posts = [...data];
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new Posts()