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

    <button type="submit" class="create">Add</button>
  </fieldset>
</form>
        `
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

    <button type="submit" class="create">Create</button>
  </fieldset>
</form>
    `
}