import Render from '../util/Render'

export default function(task){
    const card = document.createElement('div');
    card.classList = 'card';
    card.setAttribute('checked', task.isDone);

    card.innerHTML = `
    <h2 class="title">${task.title}</h2>
    <p class="due-date">${task.dueDate || '<button>Add Due Date</button>'}</p>
    <p class="description">${task.description || '<button>Add Description</button>'}</p>
    ${task.description ? '<button class="expand" collapsed="true">Expand</button>' : ''}
    `;
    card.querySelector('.title').addEventListener('click', () => {
        const doneStatus = task.toggleDone();
        card.setAttribute('checked', doneStatus);
    })
    return card;
}