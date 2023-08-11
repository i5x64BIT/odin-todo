import Task from "../models/Task";

export default class{
    constructor(){
        if(!localStorage.getItem('taskArr')){
            localStorage.setItem('taskArr','[]');
            localStorage.setItem('taskID', '0');
        }
    }
    getTaskArray = () => {
        let arr = JSON.parse(localStorage.getItem('taskArr'));
        arr = arr.map(elem => new Task(elem.title, elem.dueDate, elem.description, elem.isDone, elem.id));
        return arr;
    };
    getTaskID = () => Number.parseInt(localStorage.getItem('taskID'));
    addTask = task => {
        const array = this.getTaskArray();
        array.push(task);
        localStorage.setItem('taskArr', JSON.stringify(array));
        localStorage.setItem('taskID', (task.id + 1)); // Make the getTaskID function return a fresh id
    };
    getTask(id){
        return this.getTaskArray().filter(task => task.id === id);
    }
    updateTask(id, newTask){
        const taskArr = this.getTaskArray();
        const index = taskArr.findIndex(task => task.id === id);
        taskArr.splice(index, 1, newTask);
        localStorage.setItem('taskArr', JSON.stringify(taskArr));
    }
    // removeTask = task => this.taskArr = JSON.parse(this.taskArr).filter(t => t !== task);
    // clearTasks = () => JSON.parse(this.taskArr).splice(0);
};