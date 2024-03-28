let todo_Wrapper = document.querySelector('.wrapper');
let newTodo = document.querySelector('.todo_name');
let addTodo = document.querySelector('.add_todo');
let todo = [];

addTodo.addEventListener('click' , function(){
    if(newTodo.value != ''){
        todo.push(newTodo.value);
        console.log(todo);
    }

    let newTodolist = document.createElement('div');
        newTodolist.className = 'item';

    for(let i = 0 ; i < todo.length ; i++){
        newTodolist.innerHTML = newTodo.value;
        todo_Wrapper.appendChild(newTodolist);
    }
    if(todo.length > 0){
        let item = document.querySelectorAll('.item');
        for(let j=0; j<item.length;j++){
            let delete_todo = document.createElement('div');
                delete_todo.className = 'delete';
                delete_todo.innerHTML = "X";
                item[j].appendChild(delete_todo);

            delete_todo.addEventListener('click',()=>{
                todo_Wrapper.removeChild(item[j]);
            })
        }
        newTodo.value = '';
    }

})

new Sortable(todo_Wrapper,{
    animation: 300
});