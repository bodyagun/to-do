import { Todo, currentDate } from "./logic/todo.js"
import Project from "./logic/project.js"
import { renderProjects, currProj } from "./ui/renderProjects.js"
import { renderTodo, renderTodos } from "./ui/renderTodos.js"
import { openModal, openProjectModal } from "./ui/modal.js"
import { saveToStorage, loadFromStorage } from "./logic/storage.js"

const projects = []
const data = loadFromStorage()

if (data) {
    data.forEach(p => {
        const project = new Project(p.title)
        project.id = p.id
        p.todos.forEach(t => {
            const todo = new Todo(t.title, t.date, t.priority, t.status)
            todo.id = t.id
            todo.status = t.status
            project.todos.push(todo)
        })
        projects.push(project)
    })
} else {
    const general = new Project("General")
    projects.push(general)  
    currProj(general)
}

currProj(projects[0])
renderTodos(projects[0].todos, projects[0])

renderProjects(projects, setCurrentProject)
let currentProject = projects[0]
const modalOverlay = document.getElementById("modal-overlay")

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
    saveToStorage(projects)
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
            saveToStorage(projects)
    })
    modalOverlay.classList.remove("hidden")
})

const allTasks = document.getElementById("alltasks")
allTasks.addEventListener("click", () => {
    const allTodos = projects.flatMap(p => p.todos)
    const taskList = document.getElementById("task-list")
    renderTodos(allTodos, currentProject)
})

const doneTasks = document.getElementById("done")
doneTasks.addEventListener("click", () => {
    const done = projects.flatMap(p => p.todos).filter(t => t.status === true)
    renderTodos(done, currentProject)
console.log(projects.flatMap(p => p.todos))
console.log(projects.flatMap(p => p.todos).filter(t => t.status === true))
})

const dueTasks = document.getElementById("due")
dueTasks.addEventListener("click", () => {
    const due = projects.flatMap(p => p.todos).filter(t => t.date < currentDate())
    renderTodos(due, currentProject)
})

export function getProjects() {
    return projects
}
