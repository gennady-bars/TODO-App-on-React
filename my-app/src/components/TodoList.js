import React from 'react';

import TodoListItem from './TodoListItem'

const TodoList = ({todos}) => {
    const items = todos.map(({id, ...item}) => {
       return (
       <li key={id}>
       <TodoListItem {...item}/>
       </li>)
    })
    return (
      <ul>
        {items}
      </ul>
    )
  }

  export default TodoList;