import Task from "../models/Task";
import activeTasks from "../pages/activeTasks";
import Render from "../util/Render";
import Storage from '../util/Storage'

export default function(){
    const storage = new Storage();
    const render = new Render();
    const pageContainer = document.querySelector('.page-container');

    const formContainer = document.createElement('div');
    formContainer.classList = 'form-container';

    const form = document.createElement('form');
    form.innerHTML = `
        <div><legend>Add A New Task</legend><img src="#" alt="X" class="close" style="cursor: pointer;"></div>
        <div class="inputs">
            <input type="text" id="title" placeholder="Title*" required>
            <input type="datetime-local" id="due-date">
            <textarea id="description" placeholder="Description" cols="45" rows="2"></textarea>
        </div>
        <button id="submit">Add task</button>
    `;
    formContainer.appendChild(form);
    
    const btnClose = form.querySelector('.close');
    const btnSubmit = form.querySelector('button#submit');

    //Button Handler
    btnClose.onclick = btnSubmit.onclick = function(e){
        if( e.target === btnClose){
            pageContainer.removeChild(formContainer);
        }
        if( e.target === btnSubmit){
            const eTitle = form.querySelector('input#title');
            const eDate = form.querySelector('input#due-date');
            const eDesc = form.querySelector('textarea#description');

            const task = new Task( eTitle.value, eDate.value, eDesc.value );
            storage.addTask(task);
            render.renderPage(activeTasks);
        }
    }

    return formContainer;
}



