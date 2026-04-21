export default class Project {
    constructor(title) {
        this.title = title
        this.todos = []
    }

    addTodo(todo) {
        this.todos.push(todo)
    }

    removeTodo(id) {
        for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i].id === id) {
                this.todos.splice(i, 1)
                break
            }
        }
    }

    getTodo(id) {
        for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i].id === id) {
                return this.todos[i]
            }
        }
    }
}