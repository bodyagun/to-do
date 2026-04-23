    export function renderTodo(todo, currentProject) {
        let taskList = document.getElementById("task-list")

        let task = document.createElement("div")
        task.classList.add("task-row")

        let title = document.createElement("span")
        title.textContent = `${todo.title}`

        let date = document.createElement("span")
        date.textContent = `${todo.date}`

        let priority = document.createElement("span")
        priority.textContent = `${todo.priority}`

        let status = document.createElement("span")
        if (todo.status === false) {
            status.textContent = "Pending"
        } else {
            status.textContent = "Done"
        }

        let deleteTask = document.createElement("button")
        deleteTask.textContent = "Delete"

        deleteTask.dataset.id = todo.id

        deleteTask.addEventListener("click", (e) => {
                    currentProject.removeTodo(deleteTask.dataset.id)
                    task.remove()
                })
        
        task.appendChild(title)
        task.appendChild(date)
        task.appendChild(priority)
        task.appendChild(status)
        task.appendChild(deleteTask)
        taskList.appendChild(task)
    }

    export function renderTodos(arr, currentProject) {
        for (let i = 0; i < arr.length; i++) {
            renderTodo(arr[i], currentProject)
        }
    }