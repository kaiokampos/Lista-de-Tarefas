let input = document.querySelector('.input');
let list = document.querySelector('.list');

let tasks = [
    {done : false, title : "Fazer a primeira tarefa"},
    {done : true, title: "Fazer a segunda tarefa"},
    {done : false, title: "Fazer a terceira tarefa"}
];

input.addEventListener('keyup', (event) => {
    if (event.key.toLowerCase() === 'enter' && input.value.length > 0) {
        tasks.push({
            done: false,
            title: input.value
        });
        input.value = '';
        renderList();
    }
});

function renderList() {
    list.innerHTML = '';

    for (let index in tasks) {
        let taskLi = document.createElement('li');

        let taskInput = document.createElement('input');
        taskInput.setAttribute('type', 'checkbox');

        if (tasks[index].done === true) {
            taskInput.setAttribute('checked', 'true');
            taskLi.classList.add('done');
        }

        taskInput.addEventListener('click', () => {
            tasks[index].done = !tasks[index].done;
            
            renderList();
        });
        
        taskLi.appendChild(taskInput);

        let taskSpan = document.createElement('span');
        taskSpan.innerHTML = tasks[index].title;

        taskLi.appendChild(taskSpan);


        list.appendChild(taskLi);
    }
}

renderList();