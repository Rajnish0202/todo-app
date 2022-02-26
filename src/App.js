import React, { Component } from 'react';

import TodoInputs from './components/TodoInputs';
import TodoList from './components/TodoList';

import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    items: [],
    id: uuidv4(),
    item: '',
    editItem: false,
  };

  handleChange = (event) => {
    this.setState({
      item: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };
    // console.log(newItem);

    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      item: '',
      id: uuidv4(),
      editItem: false,
    });
  };

  handleClear = () => {
    this.setState({
      items: [],
    });
  };

  handleDelete = (id) => {
    const filteredItem = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: filteredItem,
    });
  };

  handleEdit = (id) => {
    // console.log(id);
    const filteredItem = this.state.items.filter((item) => item.id !== id);

    const selectedItem = this.state.items.find((item) => item.id === id);

    // console.log(selectedItem);
    this.setState({
      items: filteredItem,
      item: selectedItem.title,
      editItem: true,
      id: id,
    });
  };

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-8 mt-4'>
            <h3 className='text-capitalize text-center'>todo input</h3>
            <TodoInputs
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              handleClear={this.handleClear}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
