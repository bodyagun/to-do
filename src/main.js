import Todo from "./logic/todo.js"
import Project from "./logic/project.js"
import renderProjects from "./ui/renderProjects.js"
import renderTodo from ".ui/renderTodos.js"
import renderTodos from "./ui/renderTodos.js"
import { openModal, openProjectModal } from "./ui/modal.js"
const projects = []

const general = new Project("General")
projects.push(general)
renderProjects(projects)
let currentProject = general

const addTaskBtn = document.getElementById("addTaskBtn")
addTaskBtn.addEventListener("click", () => {

    openModal()
    
    const form = document.getElementById("todo-form")
    form.addEventListener("submit", (e) => {
    e.preventDefault()
    let title = document.getElementById("todo-title")
    let date = document.getElementById("todo-date")
    let priority = document.getElementById("todo-priority")

    let todo = new Todo(title.value, date.value, priority.value, false)
    currentProject.addTodo(todo)
    renderTodo(todo)
     modalOverlay.classList.add("hidden")
    })

    let modalOverlay = document.getElementById("modal-overlay")
    modalOverlay.classList.remove("hidden")
})