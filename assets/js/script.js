let input = document.querySelector('.input');
let list = document.querySelector('.list');

let tasks = [
    {done : false, title : "Comprar corante para o o bolo"},
    {done : true, title: "Fazer academia"},
    {done : true, title: "estudar na b7web"}
];

function renderList() {
    list.innerHTML = '';

    for (let index in tasks) {
        let taskLi = document.createElement('li');
        taskLi.innerHTML = tasks[index].title;

        list.appendChild(taskLi);
    }
}

renderList();