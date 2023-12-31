import Storage from "../util/Storage";
import taskCard from "../components/taskCard";

export default function(){
    const storage = new Storage();
    const taskArr = storage.getTaskArray();
    const content = document.createElement('div');
    content.classList = 'content';

    if(!taskArr || taskArr.length === 0){
        content.innerHTML = '<p>There are no tasks created yet</p>';
    }
    else{
        for(let task of taskArr){
            content.appendChild(taskCard(task));
        }
    }
    return content;
};