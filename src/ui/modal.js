import { renderTodos } from "./renderTodos.js"
import { saveToStorage, loadFromStorage } from "../logic/storage.js"
import { getProjects } from "../main.js"

export function openModal() {
        let modal = document.getElementById("modal")
        modal.innerHTML = `
        <form id="todo-form">
  <fieldset>
    <legend>New Task</legend>

    <div class="form-group">
      <label for="todo-title">Title</label>
      <input type="text" id="todo-title" required>
    </div>

    <div class="form-group">
      <label for="todo-date">Due Date</label>
      <input type="date" id="todo-date">
    </div>

    <div class="form-group">
      <label for="todo-priority">Priority</label>
      <select id="todo-priority">
        <option value="high">High</option>
        <option value="low" selected>Low</option>
      </select>
    </div>

    <div class="form-btns">
    <button type="submit" class="create">Add</button>
    <button type="button" id="cancel-btn">Cancel</button>
    </div>
  </fieldset>
</form>
        `

    document.getElementById("cancel-btn").addEventListener("click", () => {
    document.getElementById("modal-overlay").classList.add("hidden")
})
}

export function openProjectModal() {
    let modal = document.getElementById("modal")
    modal.innerHTML = `
    <form id="project-form">
  <fieldset>
    <legend>New Project</legend>

    <div class="form-group">
      <label for="project-title">Title</label>
      <input type="text" id="project-title" required>
    </div>

    <div class="form-btns">
    <button type="submit" class="create">Create</button>
    <button type="button" id="cancel-btn">Cancel</button>
    </div>
  </fieldset>
</form>
    `
    document.getElementById("cancel-btn").addEventListener("click", () => {
    document.getElementById("modal-overlay").classList.add("hidden")
})
}

export function openEditModal(todo, currentProject) {
    let modal = document.getElementById("modal")
    modal.innerHTML = `
  <form id="edit-form">
  <fieldset>
    <legend>Edit Task</legend>

    <div class="form-group">
      <label for="edit-title">Title</label>
      <input type="text" id="edit-title" required>
    </div>

    <div class="form-group">
      <label for="edit-date">Due Date</label>
      <input type="date" id="edit-date">
    </div>

    <div class="form-group">
      <label for="edit-priority">Priority</label>
      <select id="edit-priority">
        <option value="high">High</option>
        <option value="low">Low</option>
      </select>
    </div>

    <div class="form-group">
      <label for="edit-status">Status</label>
      <select id="edit-status">
        <option value="false">Pending</option>
        <option value="true">Done</option>
      </select>
    </div>

    <div class="form-btns">
    <button type="submit" id="save-btn">Save</button>
    <button type="button" id="cancel-btn">Cancel</button>
    </div>
  </fieldset>
</form>
  `

  document.getElementById("cancel-btn").addEventListener("click", () => {
    document.getElementById("modal-overlay").classList.add("hidden")
})
  let editTitle = document.getElementById("edit-title")
  editTitle.value = todo.title

  let editDate = document.getElementById("edit-date")
  editDate.value = todo.date

  let editPriority = document.getElementById("edit-priority")
  editPriority.value = todo.priority

  let editStatus = document.getElementById("edit-status")
  editStatus.value = todo.status

  let form = document.getElementById("edit-form")
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    todo.title = editTitle.value
    todo.date = editDate.value
    todo.priority = editPriority.value
    todo.status = editStatus.value === "true"
    renderTodos(currentProject.todos, currentProject)
    let modalOverlay = document.getElementById("modal-overlay")
    modalOverlay.classList.add("hidden")
    saveToStorage(getProjects())
  })
}