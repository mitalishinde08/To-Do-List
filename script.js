'use strict'

let task_box = document.getElementById('main-input');
let add = document.getElementById('add');

add.addEventListener('click',add_task);
let counter=0;

function add_task() {
    counter++;
    var el1 = document.createElement("div");
    el1.innerHTML = `<input type="text">
    <img src="/assets/tickmark.svg" class="tick">
    <img src="/assets/notebook-pen-icon.svg" class="note">
    <img src="/assets/delete.svg" class="del">`;
    el1.classList.add("box_task");
    document.body.appendChild(el1);
    el1.querySelector('input').value = task_box.value;
}

let del = document.querySelector('.del');

del.addEventListener('click',clear_task);

function clear_task() {
    task_box.value = '';
}




