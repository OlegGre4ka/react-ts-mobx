import { makeAutoObservable } from "mobx";

class Counter {
    count=0;

    constructor(){
        makeAutoObservable(this)
    }

    increment(){
        this.count=this.count+1
    }

       decrement(){
        this.count=this.count-1
    }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new Counter();