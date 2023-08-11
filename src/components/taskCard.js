import Render from '../util/Render';
import Storage from '../util/Storage';

export default function(task){
    const card = document.createElement('div');
    card.classList = 'card';
    card.setAttribute('checked', task.isDone);
    const storage = new Storage();
    card.innerHTML = `
    <h2 class="title">${task.title}</h2>
    <p class="due-date">${task.dueDate || '<button>Add Due Date</button>'}</p>
    <p class="description">${task.description || '<button>Add Description</button>'}</p>
    ${task.description ? '<button class="expand" collapsed="true">Expand</button>' : ''}
    `;
    card.querySelector('.title').addEventListener('click', () => {
        const doneStatus = task.toggleDone();
        storage.updateTask(task.id, task)
        card.setAttribute('checked', doneStatus);
    })
    card.querySelector('.due-date').addEventListener('click', function(){
        const datePicker = document.createElement('input');
        datePicker.setAttribute('type', 'date');
        datePicker.addEventListener('change', function(e){
            task.dueDate = this.value;
            storage.updateTask(task.id, task);
            (new Render).refreshPage()
        })
        this.appendChild(datePicker);
    }, {once: true})

    return card;
}