import Task from "../models/Task";

export default class{
    constructor(){
        if(!localStorage.getItem('taskArr')){
            localStorage.setItem('taskArr','[]');
        }
    }
    getTaskArray = () => {
        let arr = JSON.parse(localStorage.getItem('taskArr'));
        arr = arr.map(elem => new Task(elem.title, elem.dueDate, elem.description, elem.isDone));
        return arr;
    };
    addTask = task => {
        const array = this.getTaskArray();
        array.push(task);
        localStorage.setItem('taskArr', JSON.stringify(array));
    };
    // removeTask = task => this.taskArr = JSON.parse(this.taskArr).filter(t => t !== task);
    // clearTasks = () => JSON.parse(this.taskArr).splice(0);
}