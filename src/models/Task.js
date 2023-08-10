export default (title, dueDate, description) => {
    if(!title || typeof title !== 'string') console.error('Illegal title was provided')
    const Task = { title, isDone: false };

    const isTypeCorrect = (check, required) => { 
        if(typeof check != required){
            console.error(`A ${required} is required, ${check} was provided.`);
            return false;
        };
        return true; 
    }

    Task.setDueDate = dueDate => Task.dueDate = dueDate;
    Task.setDescription = description => Task.description = description;
    Task.setTitle = title => Task.title = title;
    Task.toggleDone = () => Task.isDone ? Task.isDone = false : Task.isDone = true;

    Task.modify = options => { //options with key value pairs
        if(!isTypeCorrect(options, 'object')) return;
        for(key in options){
            if(Task[key]) Task[key] = options[key];
            else{
                console.error(`${key} is an illegal key`);
                return;
            } 
        }
    }

    if(dueDate){
        if(!isTypeCorrect(dueDate, 'string')) return;
        Task.setDueDate(dueDate);
    }
    if(description){
        if(!isTypeCorrect(description, 'string')) return;
        Task.setDescription(description);
    }
    return Task;
}
