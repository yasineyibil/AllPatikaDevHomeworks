const form = document.querySelector("#todo-form")
const task = document.querySelector("#task")
let delete_btn;

const handlerform = (e) => {
    e.preventDefault()
    if (task.value.trim()) {
        todoadd(task.value)
        task.value = ""
        $(".success").toast("show");
    }
    else {
        $(".error").toast("show");
    }
}



const removeTodo = (e) => {
    const todo = e.target.parentElement;
    todo.remove();
}

const todoadd = (todovalue) => {
    const list = document.querySelector("#list")
    let liDom = document.createElement("li")
    delete_btn = `<button id="deleteBtn" class="delete-btn"></button>`;
    liDom.innerHTML = `${todovalue} ${delete_btn}`;
    list.appendChild(liDom);
    liDom.onclick = check;

    delete_btn = document.querySelectorAll("#deleteBtn")
    delete_btn.forEach(btn => btn.addEventListener("click", removeTodo));
}

function check() {
    this.classList.toggle("checked")
}



form.addEventListener("submit", handlerform);
