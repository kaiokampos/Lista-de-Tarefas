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

        let taskInput = document.createElement('input');
        taskInput.setAttribute('type', 'checkbox')
        
        taskLi.appendChild(taskInput);

        let taskSpan = document.createElement('span');
        taskSpan.innerHTML = tasks[index].title;

        taskLi.appendChild(taskSpan);


        list.appendChild(taskLi);
    }
}

renderList();