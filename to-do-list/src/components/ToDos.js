import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDos extends Component {
    render(){
        return this.props.todos.map((todo) => (
            <ToDoItem todo = {todo} />
        ));
    }
}

export default ToDos;
