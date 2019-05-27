import React from 'react';

// import { Container } from './styles';

const Todos = ({todos}) => {
const todoList = todos.length ? () : (
  <p className="center">You have no todo`s left, yay!</p>
)
  return (
    <div className="todos collection">

    </div>
  );
}
export default Todos;
