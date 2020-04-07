import React from 'react';

import TodoListItem from './TodoListItem'
import './TodoList.css'

const TodoList = ({todos, onRemove}) => {
    const items = todos.map(({id, ...item}) => {
       return (
       <li key={id} className="list-group-item">
       <TodoListItem {...item} onRemove={onRemove} id={id}/>
       </li>)
    })
    return (
      <ul className="list-group todo-list">
        {items}
      </ul>
    )
  }

  export default TodoList;