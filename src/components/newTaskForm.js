export default function(){
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
        <button>Add task</button>
    `;
    formContainer.appendChild(form);
    
    const btnClose = form.querySelector('.close');
    btnClose.addEventListener('click', function(){
        pageContainer.removeChild(formContainer);
    });

    return formContainer;
}



