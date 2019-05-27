import React from 'react';

// import { Container } from './styles';

const Todos = ({todos, deleteTodo}) => {
const todoList = todos.length ? (
  todos.map(todo => {
    return(
      <div key={todo.id} className="collection-item">
        <span>{todo.content}</span>
      </div>
    )
  })
) : 
(
  <p className="center">You have no todo`s left, yay!</p>
)

  return (
    <div className="todos collection">
      {todoList}
    </div>
  );
}
export default Todos;
