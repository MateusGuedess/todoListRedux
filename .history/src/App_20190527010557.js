import React, { Component } from 'react';
import Todos from './Todos'

class App extends Component {

  state= {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todos => {
      return todos.id !== id
    })

    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">TODO`s</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
