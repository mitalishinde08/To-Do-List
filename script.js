'use strict'

let task_box = document.getElementById('main-input');
let add = document.getElementById('add');

add.addEventListener('click',add_task);

function add_task() {
    var el1 = document.createElement("div");
    el1.innerHTML = `<input type="text">
    <img src="/assets/tickmark.svg" class="tick">
    <img src="/assets/delete.svg" class="del">`;
    el1.classList.add("box_task");
    document.body.appendChild(el1);
    el1.querySelector('input').value = task_box.value;
    task_box.value=''

    // delete tasks
    let del_task_btn = el1.querySelector('.del');

    del_task_btn.addEventListener('click',delete_task)

    function delete_task() {
        del_task_btn.parentElement.remove()
    }

    // complete tasks
    let done_task_btn = el1.querySelector('.tick');

    done_task_btn.addEventListener('click',done_task)

    function done_task() {
        el1.querySelector('input').style.textDecoration='line-through';
    }
}

let del = document.querySelector('.del');

del.addEventListener('click',clear_task);

function clear_task() {
    task_box.value = '';
}











