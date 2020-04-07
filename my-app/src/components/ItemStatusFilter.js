import React from 'react';

// import './item-status-filter.css';

const ItemStatusFilter = ({onFilterChange}) => {
  return (
    <div className="btn-group">
      <button type="button"
              className="btn btn-info"
              onClick={() => onFilterChange('all')}>All</button>
      <button type="button"
              className="btn btn-outline-secondary"
              onClick={() => onFilterChange('active')}>Active</button>
      <button type="button"
              className="btn btn-outline-secondary"
              onClick={() => onFilterChange('done')}>Done</button>
    </div>
  );
};

export default ItemStatusFilter;