import './style.css';
import newTaskForm from './components/newTaskForm';
import Render from './util/Render';
import activeTasks from './pages/activeTasks';



const render = new Render();
render.renderPage(activeTasks);
 
//Form Creation
document.querySelector('li[name="New Task"]')
.addEventListener('click', () => {
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
