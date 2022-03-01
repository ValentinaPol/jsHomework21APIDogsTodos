//https://jsonplaceholder.typicode.com/users/1/todos
// Выведите первые 4 задачи из данного списка. Обязательно нужно вывести название задачи, и текущее состоаяние выполнения(true/false)

const TASKS_URL = 'https://jsonplaceholder.typicode.com/users/1/todos';
const TASK_BY_ID = 'https://jsonplaceholder.typicode.com/todos';

const getAllTasks = (countLimit) => {
    fetch(`${TASKS_URL}/?_limit=${countLimit}`).then(
        response => {
            return response.json();
        }
    )
    .then(
        data => {
            const todoList = document.querySelector('#todos');
            todoList.innerHTML = '';
            data.forEach((tasks) => {
                todoList.innerHTML += `
            <div class="card pink darken-1">
                <div class="card-content white-text">
                <span class="card-title">${tasks.title}</span>
                <p>${tasks.completed}</p>
                </div>
            </div>
            `        
            })
        }
    )
    .catch(
        err => {
            console.log(err);
        }
    )
}

document.querySelector('#ten-tasks').addEventListener('click', () => {
    getAllTasks(10);
})

document.querySelector('#thirty-tasks').addEventListener('click', () => {
    getAllTasks(30);
})


const getTask = (taskId) => {
    fetch(`${TASK_BY_ID}/${taskId}`).then(
        response => {
            return response.json();
        }
    )
    .then(
        data => {
            const todoList = document.querySelector('#todos');
            todoList.innerHTML = '';
            todoList.innerHTML += `
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                <span class="card-title">${data.title}</span>
                <p>${data.completed}</p>
                </div>
            </div>
            `      
        }
    )
    .catch(
        err => {
            console.log(err);
        }
    )
}

document.querySelector('#ninth-task').addEventListener('click', () => {
    getTask(9);
});