import Storage from "../util/Storage";
import taskCard from "../components/taskCard";
import Render from "../util/Render";

const completeTasks = function(){
    const completeTasksArray = (new Storage()).getTaskArray().filter(task => !task.isDone);
    const content = document.createElement('div');
    content.classList = 'content'
    if(completeTasksArray.length == 0){
        content.innerHTML = '<p>You haven\'t completed any tasks yet.</br>Go ahead and <a>Get some work done</a></p>';
        content.querySelector('a').addEventListener('click', () => {
            document.querySelector('.sidebar li[name="Active Task"]').click();
        })
    }
    else{
        const attributeObserver = new MutationObserver((mutations) => {
            (new Render()).renderPage(completeTasks);
        })
        for(let task of completeTasksArray){
            const card = new taskCard(task);
            content.appendChild(card);
            attributeObserver.observe(card, {attributes: true})
        }
    }
    return content
}
export default completeTasks;