import './style.css';
import newTaskForm from './components/newTaskForm';
import Render from './util/Render';
import activeTasks from './pages/activeTasks';
import completeTasks from './pages/completeTasks';
import allTasks from './pages/allTasks';
import burgerMenu from './components/burgerMenu';
import './assets/icons/burger-menu.svg'

const render = new Render();
const setSelected = function (){
    for(let elem of document.querySelectorAll('.sidebar li')){
        elem.removeAttribute('selected');
    }
    this.setAttribute('selected', '');
} 

//Form Creation
document.querySelector('li[name="New Task"]')
.addEventListener('click', function(){
    // New-Task-Form Setup
    const form = newTaskForm();
    const pageContainer = document.querySelector('.page-container');
    pageContainer.appendChild(form);
    render.dynamicElemRemoval( // Make the form disappear when clicked outside
        form.firstChild,
        form,
        pageContainer
    )
})

document.querySelector('li[name="All Tasks"]')
.addEventListener('click', function(){
    render.renderPage(allTasks);
    setSelected.call(this);
})
document.querySelector('li[name="Active Task"]')
.addEventListener('click', function(){
    render.renderPage(activeTasks);
    setSelected.call(this);
})
document.querySelector('li[name="Complete Task"]')
.addEventListener('click', function(){
    render.renderPage(completeTasks);
    setSelected.call(this);
})

burgerMenu(); // Add burger menu functionality

document.querySelector('li[name="All Tasks"]').click()