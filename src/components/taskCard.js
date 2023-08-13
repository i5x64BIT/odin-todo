import Render from '../util/Render';
import Storage from '../util/Storage';

export default function(task){
    const card = document.createElement('div');
    card.classList = 'card';
    card.setAttribute('checked', task.isDone);
    const storage = new Storage();
    card.innerHTML = `
    <h2 class="title">${task.title}</h2>
    <p class="due-date">${task.dueDate || '<button class="btn">Add Due Date</button>'}</p>
    <p class="description cutoff">${task.description || '<button class="btn">Add Description</button>'}</p>
    `;

    const dateElement = card.querySelector('.due-date');
    const descriptionElement = card.querySelector('.description');
    let btnAddDescription = card.querySelector('.description > .btn');
    let btnAddDate = card.querySelector('.due-date > .btn');

    card.querySelector('.title').addEventListener('click', () => {
        const doneStatus = task.toggleDone();
        storage.updateTask(task.id, task)
        card.setAttribute('checked', doneStatus);
    });

    function createDateForm(){
        const datePicker = document.createElement('input');
        datePicker.setAttribute('type', 'date');
        
        const handlePicker = function(e){
            if( (e.type === 'keydown' && e.key === "Enter") ||
            (e.type === 'focusout' && document.querySelector('input[type="date"]')) ){
                if(e.type === 'keydown'){
                    datePicker.removeEventListener('focusout', handlePicker);
                }
                task.dueDate = this.value;
                storage.updateTask(task.id, task);
                (new Render).refreshPage()
            }
        }
        datePicker.addEventListener('change', handlePicker)
        datePicker.addEventListener('keydown', handlePicker)
        datePicker.addEventListener('focusout', handlePicker)

        if(btnAddDate){
            dateElement.insertBefore(datePicker, btnAddDate);
            dateElement.removeChild(btnAddDate);
        }
        else{
            datePicker.value = dateElement.innerText;
            card.insertBefore(datePicker,dateElement); // Insert in place of datepicker
            card.removeChild(dateElement); // Replace datepicker with the element
        }
        datePicker.focus();
    }

    function createDescriptionForm(){ 
        const descriptionInput = document.createElement('textarea');
        const handleDescription = function(e){
            if( e.key === "Enter" && !e.shiftKey ){
                descriptionInput.removeEventListener('focusout', handleDescription);
                task.description = this.value;
                storage.updateTask(task.id, task);
                (new Render).refreshPage()
            }
            if(e.type === "focusout")
            {
                task.description = this.value;
                storage.updateTask(task.id, task);
                (new Render).refreshPage()
            }
        }
        descriptionInput.addEventListener('keydown', handleDescription)
        descriptionInput.addEventListener('focusout', handleDescription)

        btnAddDescription = card.querySelector('.description > .btn'); // Recheck button presence
        if(btnAddDescription){
            descriptionElement.insertBefore(descriptionInput, btnAddDescription)
            descriptionElement.removeChild(btnAddDescription);
        }
        else{
            descriptionInput.innerText = this.innerText;
            card.insertBefore(descriptionInput, descriptionElement);
            card.removeChild(descriptionElement);
        }
        descriptionInput.focus();
    }
    
    if(!task.description){
        btnAddDescription.addEventListener('click', createDescriptionForm);
    } else {
        descriptionElement.addEventListener('click', createDescriptionForm, {once: true});
    }

    if(!task.dueDate){
        btnAddDate.addEventListener('click', createDateForm);
    } else {
        dateElement.addEventListener('click', createDateForm, {once: true});
    }


    return card;
}