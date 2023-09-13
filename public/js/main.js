const deleteBtn = document.querySelectorAll('.del')
const todoItem = document.querySelectorAll('span.not')
const todoComplete = document.querySelectorAll('span.completed')
const editBtn = document.querySelectorAll('.edit')
const saveBtn = document.querySelectorAll('.save')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteTodo)
})

Array.from(todoItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(todoComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

Array.from(editBtn).forEach(el => {
    el.addEventListener('click', inputToggle);
})

Array.from(saveBtn).forEach(el => {
    el.addEventListener('click', editTodo);
})

async function deleteTodo(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/deleteTodo', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

function inputToggle() {
    const todo = this.parentNode.childNodes[1];
    const input = document.createElement('input');
    const todoEdit = this.parentNode.childNodes[5];
    const saveTodo = this.parentNode.childNodes[7];

    todoEdit.classList.toggle('displayNone');
    saveTodo.classList.toggle('displayNone');

    input.setAttribute('type', 'text');
    input.value = todo.textContent;
    input.classList.add('editInput');
    todo.replaceWith(input);
}

async function editTodo() {
    const todoId = this.parentNode.dataset.id;
    const editInput = this.parentNode.childNodes[1];

    try {
        const response = await fetch('todos/editTodo', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                todoIdFromJSFile: todoId,
                todo: editInput.value.trim(),
            })
        })
        const data = await response.json();
        console.log(data);
        location.reload();

    } catch (err) {
        console.log(err);
    }
}