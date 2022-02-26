import React, { Component } from 'react';

export default class TodoInputs extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className='card card-body my-3'>
        <form className='text-center' onSubmit={handleSubmit}>
          <div className='input-group'>
            <div className='input-group-prepend'>
              <div className='input-group-text bg-primary text-white py-3'>
                <i className='fas fa-book' />
              </div>
            </div>
            <input
              type='text'
              className='form-control text-capitalize'
              placeholder='add a todo item'
              value={item}
              onChange={handleChange}
            />
          </div>
          <button
            type='submit'
            className={
              editItem
                ? 'btn btn-success mt-3 text-capitalize'
                : 'btn btn-primary mt-3 text-capitalize'
            }
          >
            {editItem ? 'edit item' : 'add item'}
          </button>
        </form>
      </div>
    );
  }
}
