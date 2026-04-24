import { openEditModal } from "./modal.js"
import { saveToStorage, loadFromStorage } from "../logic/storage.js"
import { getProjects } from "../main.js"

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
        deleteTask.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
    <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
</svg>`
        deleteTask.dataset.id = todo.id
        deleteTask.addEventListener("click", (e) => {
                    currentProject.removeTodo(deleteTask.dataset.id)
                    task.remove()
                    saveToStorage(getProjects())
                })

        let edit = document.createElement("button")
        edit.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil-icon lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>`
        edit.addEventListener("click", () => {
            let modalOverlay = document.getElementById("modal-overlay")
            modalOverlay.classList.remove("hidden")
            openEditModal(todo, currentProject)
        })        
        
        task.appendChild(title)
        task.appendChild(date)
        task.appendChild(priority)
        task.appendChild(status)
        task.appendChild(deleteTask)
        task.appendChild(edit)
        taskList.appendChild(task)
    }

    export function renderTodos(arr, currentProject) {
                let taskList = document.getElementById("task-list")
                    taskList.innerHTML = ""
        for (let i = 0; i < arr.length; i++) {
            renderTodo(arr[i], currentProject)
        }
    }