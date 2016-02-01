import alt from '../alt';
import todoActions from '../actions/todoActions';

class TodoStore {
    constructor() {
        this.todos = [];

        this.bindListeners({
            addTodo: todoActions.ADD_TODO,
            removeTodo: todoActions.REMOVE_TODO
        });
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    removeTodo(todo) {
        console.log('removing in store');
        this.todos.forEach((item, index) => {
            if (item.value === todo.value) {
                this.todos.splice(index, 1);
            }
        });

        console.log(this.todos);
    }
}

module.exports = alt.createStore(TodoStore, 'TodoStore');
