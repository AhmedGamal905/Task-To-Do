class TaskManager {
    constructor() {
        this.tasks = [];

        this.id = 0;

        this.taskInput = document.getElementById('taskInput');

        this.addTaskBtn = document.getElementById('addTaskBtn');

        this.taskList = document.getElementById('taskList');

        this.addTaskBtn.addEventListener('click', () => this.saveTask());

        this.taskInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                this.saveTask();
            }
        });

        this.loadTasks();

        document.addEventListener('DOMContentLoaded', () => this.displayTasks());
    }

    loadTasks() {
        const savedTasks = JSON.parse(localStorage.getItem('tasks'));

        if (savedTasks) {
            this.tasks = savedTasks;
            if (this.tasks.length > 0) {
                this.id = Math.max(...this.tasks.map(task => task.id)) + 1;
            }
        }
    }

    saveToLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    displayTasks() {
        this.taskList.innerHTML = '';

        this.tasks.forEach((task) => {
            const li = document.createElement('li');

            const deleteBtn = document.createElement('button');

            const checkBox = document.createElement('input');

            checkBox.type = 'checkbox';

            checkBox.checked = task.finalized;

            checkBox.addEventListener('click', () => {
                task.finalized = checkBox.checked;
                this.saveToLocalStorage();
            });

            deleteBtn.textContent = 'delete';

            deleteBtn.classList.add('delete-btn');

            li.textContent = task.content;

            deleteBtn.addEventListener('click', () => {
                this.deleteTask(task.id);
            });

            this.taskList.appendChild(li);

            li.appendChild(checkBox);

            li.appendChild(deleteBtn);
        });
    }

    saveTask() {
        const taskContent = this.taskInput.value;

        if (taskContent === '') {
            window.alert('Task content is empty!');
            return;
        }

        const newTask = {
            id: this.id++,
            content: taskContent,
            finalized: false,
        };

        this.tasks.push(newTask);

        this.saveToLocalStorage();

        this.displayTasks();

        this.taskInput.value = '';
    }

    deleteTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);

        this.saveToLocalStorage();

        this.displayTasks();
    }
}

const taskManager = new TaskManager();
    