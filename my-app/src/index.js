import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';
import ItemStatusFilter from './components/ItemStatusFilter';
import ItemAddForm from './components/ItemAddForm';

import './index.css';

const App = () => {

  const todoData = [
    { label: 'Drink Coffee', important: false, id: 1, done: false },
    { label: 'Make Awesome App', important: true, id: 2, done: false  },
    { label: 'Have a lunch', important: false, id: 3, done: false  }
  ];

  let [todos, setTodos] = useState(todoData)
  let [search, setSearch] = useState('')
  let [filter, setFilter] = useState('all')

  function removeTodoHandler(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function onAdd(text) {
    let todo =  { label: text, important: false, id: +(new Date()) }
    setTodos(state => [...state, todo])
  }

  function toggleImportant(id) {
    setTodos(state => {
      let newState = state.map(todo => {
        if (todo.id === id) {
          return {...todo, important: !todo.important}
        }
        return todo
      })
      return newState
    })
  }
  function handleDone(id) {
    setTodos(state => {
      let newState = state.map(todo => {
        if (todo.id === id) {
          return {...todo, done: !todo.done}
        }
        return todo
      })
      return newState
    })
  }

  function onChange(e) {
    let text = e.target.value;
    setSearch(text)
    
  }

  function searchTodos(todos, search) {
    return search? todos.filter(todo => {
      let regEx = new RegExp(`${search}`, 'i')
      return todo.label.match(regEx)
    }): todos
  }

  function filterTodos(todos, filter) {
    switch (filter) {
      case 'all':
        return todos;
      case 'active':
        return todos.filter(todo => !todo.done);
      case 'done':
        return todos.filter(todo => todo.done);
      default:
        return todos;
    }
  }

  function onFilterChange(filter) {
    setFilter(filter)
  }

  let countDone = todos.filter(todo => todo.done).length
  let countTodos = todos.length - countDone
  let visibleTodos = searchTodos(todos, search)
  visibleTodos = filterTodos(visibleTodos, filter)

  return (
    <div className="todo-app">
      <AppHeader toDo={countTodos} done={countDone} />
      <div className="top-panel d-flex">
        <SearchPanel onChange={onChange}/>
        <ItemStatusFilter onFilterChange={onFilterChange} />
      </div>
      <TodoList todos={visibleTodos}
      onRemove={removeTodoHandler} 
      toggleImportant={toggleImportant}
      handleDone={handleDone} />
      <ItemAddForm onAdd={onAdd}/>
    </div>
  );
};

ReactDOM.render(<App />,
  document.getElementById('root'));