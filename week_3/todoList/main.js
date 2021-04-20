let add = document.getElementById('add');
let move = document.getElementById('completed');
let remove = document.getElementById('undo');
let input = document.getElementById('input');
let todo = document.getElementById('listDo');
let finished = document.getElementById('listDone');
let done = document.getElementById('listDone')

add.addEventListener('click', function(){
    let task = input.value
    todo.innerHTML += "<li>" +"<input type=checkbox>" + task + "</li>";
    input.value = ""

})

move.addEventListener('click', function(){
    for (i=0; i<todo.children.length; i++){
        console.log(todo.children[i].children[0].checked)
        if (todo.children[i].children[0].checked){
            todo.children[i].children[0].checked = false
            finished.appendChild(todo.children[i])
        }
    }
})

remove.addEventListener('click', function(){
    for (i=0; i<todo.children.length; i++){
        if (finished.children[i].children[0].checked){
            finished.removeChild(finished.children[i])
        }
    }
})