let count = 0;
const newTodoInput = document.querySelector('input');
const addTodoBtn = document.querySelector('button');
const todolist = document.querySelector('div.todos');
addTodoBtn.addEventListener("click",addTodo);

function addTodo(){
    let typedInput = newTodoInput.value;
    let paragraphContent = document.createElement("p");
    paragraphContent.setAttribute("key",count);
    count += 1;
    paragraphContent.innerHTML = typedInput;
    todolist.append(paragraphContent);
    paragraphContent.addEventListener("click",paragraphContent.remove);
}