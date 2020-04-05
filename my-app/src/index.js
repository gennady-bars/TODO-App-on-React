import React from 'react';
import ReactDOM from 'react-dom';

function TodoItem() {
  return (
    <span>Drink Coffee</span>
  )
}

function TodoList() {
  return (
    <ul>
      <li><TodoItem></TodoItem></li>
      <li><TodoItem></TodoItem></li>
      <li><TodoItem></TodoItem></li>
    </ul>
  )
}

function App() {
  return (
    <TodoList/>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
