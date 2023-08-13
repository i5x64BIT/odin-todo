# Odin - ToDo

This project is provided by [Odin](https://theodinproject.com).<br/>
Here I set out to reinforce the following skills:
* Webpack Usage
* Dynamic DOM Rendering
* The SOLID Pattern

#### Challenges Overcome:
* Rendering elements with event listeners:
    + Returning or exporting innerHTML removes all event listeners.
    <br>I overcame this behavior by returning the node itself.
* Form removal when licking outside the form:
    - Solved by adding a `mousein` and `mouseout` triggers and listening for a click on the parent container. (`mouseout` and `mouseleave` differ with that `mouseout` bubbles up while `mouseleave` doesn't. Same for `mousein` and `mouseenter`).
* Form didn't disappear on first click: 
    - You can fire the event by yourself with functions like `element.click()`.
* `localStorage` doesn't store object functions:
    - Upon object array retrieval, firstly `JSON.parse`, then `map(task => new Task(...task))`;
* Can't refresh only one part of the page upon change:
    - Export a function instead of a Node, this allows you to call the function, thereby re-assign all the variables in the component.
    - Change detection is done using [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)
* No id on refresh:
    - `localStorage` has an extra parameter of `lastID` stored, it is being dictated by the last `Task` created.
* `keydown` and `focusout` events collision
    - When an enter key was pressed, the page reloaded. On page reload, the `focusout` event fired.
    the solution is rather simple. If an `enter key` is pressed, remove the `focusout` listener.

#### Credit
[Hamburger menu icon](https://www.svgrepo.com/svg/145176/menu-symbol-of-three-parallel-lines)