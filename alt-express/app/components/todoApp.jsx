import React from 'react';
import todoStore from '../stores/todoStore';
import todoActions from '../actions/todoActions';

const Todo = React.createClass({
    render() {
        return (
            <span>
                {this.props.todo.value}
            </span>
        )
    }
});

const TodoApp = React.createClass({
    getInitialState() {
        return todoStore.getState();
    },

    componentDidMount() {
        todoStore.listen(this.onChange);
    },

    componentWillUnmount() {
        todoStore.unlisten(this.onChange);
    },

    onChange(state) {
        this.setState(state);
    },

    addTodo(event) {
        todoActions.addTodo(
            {
                value: this.state.newTodo,
                complete: false
            }
        );
        this.setState(
            {
                newTodo: '',
                todos: this.state.todos
            }
        );
    },

    removeTodo(todo) {
        todoActions.removeTodo(todo);
    },

    handleChange(event) {
        this.setState({
            todos: this.state.todos,
            newTodo: event.target.value
        })
    },

    render() {
        return (
            <div>
                <ul>
                    {this.state.todos.map((todo, index) => {
                        return <li><Todo key={index} todo={todo} /><button onClick={this.removeTodo.bind(this, todo)} >Remove</button></li>;
                    })}
                </ul>
                <input type="text" value={this.state.newTodo} onChange={this.handleChange} />
                <button onClick={this.addTodo} >Add</button>
            </div>
        );
    }
});

module.exports = TodoApp;
