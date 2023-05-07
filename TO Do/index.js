function add()
{
    var taskname = document.getElementById('taskname').value
    var todolist = document.getElementById('todoitem')

    var newtodoitem = document.createElement('div')

    var todoname = document.createElement('li')
    todoname.innerHTML = taskname

    var deletebtn = document.createElement('i')
    deletebtn.classList.add('far')
    deletebtn.classList.add('fa-trash-alt')

    newtodoitem.appendChild(todoname)
    newtodoitem.appendChild(deletebtn)

    todolist.append(newtodoitem)
}
var todolist = document.getElementById('todoitem')
todolist.addEventListener('click',deleteitem)

function deleteitem(e)
{
    const element = e.target
    if(element.classList[0]=='far')
    {
        element.parentElement.remove()
    }
}