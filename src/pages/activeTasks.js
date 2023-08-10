import Storage from "../util/Storage";

const storage = new Storage();
const taskArr = storage.getTaskArray();
let page;
if(!taskArr || taskArr.length === 0){
    page = '<p>There are no tasks created yet</p>';
}
else{
    let cardDiv = document.createElement('div');
    for(let task of taskArr){
        const card = document.createElement('div');
        card.classList = 'card';
        card.innerHTML = `
        <input type="checkbox" name="complete">
        <h2 class="title">${task.title}</h2>
        <p class="due-date">${task.dueDate || '<button>Add Due Date</button>'}</p>
        <p class="description">${task.description || '<button>Add Description</button>'}</p>
        ${task.description ? '<button class="expand" collapsed="true">Expand</button>' : ''}
        `;
        cardDiv.appendChild(card);
    }
    page = cardDiv.innerHTML;
}
export default page;