import Storage from "../util/Storage";
export default class Task{
    constructor(title, dueDate = null, description = null, isDone = false, id = (new Storage()).getTaskID()){
        if(!title || typeof title !== 'string') {
            throw new Error('Invalid title');
        }
        this.id = id;
        this.title = title;
        this.dueDate = dueDate;
        this.description = description;
        this.isDone = isDone;
    }

    toggleDone(){
        this.isDone ? this.isDone = false : this.isDone = true;
        return this.isDone;
    }

    modify(options){ //options with key value pairs
        if(!isTypeCorrect(options, 'object')) return;
        for(key in options){
            if(this[key]) this[key] = options[key];
            else{
                console.error(`${key} is an illegal key`);
                return;
            } 
        }
    }
}
