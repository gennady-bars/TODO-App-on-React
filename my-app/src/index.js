import React from 'react';
import ReactDOM from 'react-dom';

import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';
import AppHeader from './components/AppHeader';




const App = () => {
  const todoData = [
    {label: 'Drink Coffee', important: false, id: 1},
    {label: 'Make Awesome App', important: true, id: 2},
    {label: 'Have a lunch', important: false, id: 3},
  ]
  const isLoggedIn = false;
  const login = <span> Please log in </span>
  return (
  <div>
  {isLoggedIn? null: login}
     <AppHeader/>
    <SearchPanel/>
    <TodoList todos={todoData} />
  </div>
  )
}


ReactDOM.render(<App/>, document.getElementById('root'))