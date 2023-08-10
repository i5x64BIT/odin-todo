export default class{
    constructor(){
        if(!localStorage.getItem('taskArr')){
            localStorage.setItem('taskArr','[]');
        }
    }
    getTaskArray = () => JSON.parse(localStorage.getItem('taskArr'));
    addTask = task => {
        const array = JSON.parse(localStorage.getItem('taskArr'));
        array.push(task);
        localStorage.setItem('taskArr', JSON.stringify(array));
    };
    removeTask = task => this.taskArr = JSON.parse(this.taskArr).filter(t => t !== task);
    clearTasks = () => JSON.parse(this.taskArr).splice(0);
}