# Task To-Do JS

## Overview

**Task To-Do JS** is a simple and efficient task management application built with JavaScript. It allows users to add, delete, and manage their tasks, storing them in the browser's local storage for persistence.

## Features

- Add new tasks with a simple input field.
- Mark tasks as completed using checkboxes.
- Delete tasks easily with a delete button.
- Tasks are saved in the browser's local storage, ensuring they persist across sessions.
- Responsive design for optimal viewing on various devices.

## Getting Started

To get started with **Task To-Do JS**, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/AhmedGamal905/Task-To-Do
   ```

2. **Navigate to the project directory:**

   ```bash
   cd task-to-do-js
   ```

3. **Open the `index.html` file in your web browser.**

## Usage

1. Type your task in the input field.
2. Press the "Add Task" button or hit the Enter key to add the task.
3. Check the checkbox next to a task to mark it as completed.
4. Click the "delete" button to remove a task.

## Code Structure

The main functionality is encapsulated in the `TaskManager` class, which includes methods for:

- **Loading tasks** from local storage.
- **Saving tasks** to local storage.
- **Displaying tasks** on the page.
- **Adding new tasks**.
- **Deleting tasks**.

### Key Methods

- `loadTasks()`: Loads tasks from local storage at app startup.
- `saveToLocalStorage()`: Saves the current tasks to local storage.
- `displayTasks()`: Renders the task list in the DOM.
- `saveTask()`: Validates and adds a new task.
- `deleteTask(taskId)`: Removes a task based on its ID.

## Example

Here's how you can create a new instance of the `TaskManager` class:

```javascript
const taskManager = new TaskManager();
```

This initializes the task manager and sets up event listeners for user interactions.