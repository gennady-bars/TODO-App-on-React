import React, { useState } from 'react';

import './ItemAddForm.css'

const ItemAddForm = ({onAdd}) => {
    let [value, setValue] = useState('')

    function onLabelChange(e) {
        setValue(e.target.value)
    }

    function onSubmit(e) {
        e.preventDefault()
        onAdd(value);
        setValue('')
    }

    return (
        <form className="item-add-form d-flex" onSubmit={onSubmit}>
        <input type='text'
            className='form-control'
            onChange={onLabelChange}
            value={value}
        />
            <button 
            className="btn btn-outline-secondary"
            >
            Add
            </button>
        </form>
    )
}

export default ItemAddForm;
