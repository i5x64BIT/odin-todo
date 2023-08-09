import form from '../components/newTaskForm'

export default class{
    renderContent = taskArr => {
        const content = document.querySelector('.content');
        if(!taskArr || taskArr.length === 0){
            content.innerHTML = '<p>There are no tasks created yet</p>';
        }
        else{
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


                content.appendChild(card);
            }
        }
    }
    renderTaskForm = () => {
        document.querySelector('.page-container').appendChild(form());
    }
    dynamicElemRemoval(child, childContainer, childContainerParent){
        const removeChild = () => {
            childContainerParent.removeChild(childContainer);
        }
        childContainer.addEventListener('click', removeChild); //Initial remove if clicked outside
        child.onmouseover = child.onmouseout = e => {
            if(e.type === 'mouseout'){ //Remove if clicked outside
                childContainer.addEventListener('click', removeChild );
            }
            if(e.type === 'mouseover'){ // Keep if clicked inside
                childContainer.removeEventListener('click', removeChild);
            }
        };
    }
};