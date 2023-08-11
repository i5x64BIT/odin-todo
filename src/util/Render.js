import form from '../components/newTaskForm'

export default class{
    pageContainer = document.querySelector('.page-container');
    renderTaskForm = () => {
        this.pageContainer.appendChild(form());
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
    renderPage(contentFunction){
        const pastContent = document.querySelector('.content')
        if(pastContent) this.pageContainer.removeChild(pastContent);
        this.pageContainer.appendChild(contentFunction());
    }
};