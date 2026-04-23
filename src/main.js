import Todo from "./logic/todo.js"
import Project from "./logic/project.js"
import { renderProjects, currProj } from "./ui/renderProjects.js"
import { renderTodo, renderTodos } from "./ui/renderTodos.js"
import { openModal, openProjectModal } from "./ui/modal.js"
const general = new Project("General")
const projects = []
projects.push(general)
renderProjects(projects, setCurrentProject)
let currentProject = general
const modalOverlay = document.getElementById("modal-overlay")
currProj(general)


function setCurrentProject(arr) {
    currentProject = arr
    currProj(arr)
} 


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
    renderTodo(todo, currentProject)
    modalOverlay.classList.add("hidden")
    })

    modalOverlay.classList.remove("hidden")
})

const addProjectBtn = document.getElementById("addProjectBtn")
addProjectBtn.addEventListener("click", () => {
    openProjectModal()

    const form = document.getElementById("project-form")
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        let title = document.getElementById("project-title")
        let project = new Project(title.value)
        projects.push(project)
        setCurrentProject(project)
        renderProjects(projects, setCurrentProject)
        modalOverlay.classList.add("hidden")
    })
    modalOverlay.classList.remove("hidden")
})

const allTasks = document.getElementById("alltasks")
allTasks.addEventListener("click", () => {
    const allTodos = projects.flatMap(p => p.todos)
    const taskList = document.getElementById("task-list")
    renderTodos(allTodos, currentProject)
})