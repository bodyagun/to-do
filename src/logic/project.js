export default class Project {
    constructor(title) {
        this.title = title;
        this.id = crypto.randomUUID();
        this.todos = [];
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    getTodo(id) {
        return this.todos.find(todo => todo.id === id);
    }
} 