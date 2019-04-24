import React, {Component} from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component {

  state = {
    todos: [
      {id: 1, content: 'Do a school shooting'},
      {id: 2, content: 'Do not get caught'}
    ]
  }

  deleteTodo = (id) => {
    const newTodos = this.state.todos.filter( todo => {
      return todo.id !== id;
    });

    this.setState({
      todos: newTodos
    })

  }

  addTodo = (todo) => {
    todo.id = (this.state.todos.length > 0 ? this.state.todos[this.state.todos.length-1].id + 1 : 1 );

    let newTodos = [...this.state.todos, todo];

    this.setState({
      todos: newTodos
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1>Todo's</h1>
        <Todos todos={ this.state.todos } deleteTodo={ this.deleteTodo }/>
        <AddTodo addTodo={ this.addTodo }/>
      </div>
    );
  }
}
export default App;
