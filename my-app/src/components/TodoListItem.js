import React from 'react';

import './TodoListItem.css';

const TodoListItem = ({ label, important, onRemove, toggleImportant, done, handleDone }) => {

  let classNames = `todo-list-item`
  if (done) classNames += ' done'
  if (important) classNames += ' important'

  return (
    <span className={classNames}>
      <span
        className="todo-list-item-label"
        onClick={handleDone}>
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right"
              onClick={toggleImportant}>
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right"
              onClick={onRemove}>
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default TodoListItem;