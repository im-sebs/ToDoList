import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ToDoItem extends Component {

    getStyle = () => {
       return {
           backgroundColor: '#f4f4f4',
           padding: '10px',
           borderBottom: '1px #ccc dotted',
           textDecoration: this.props.todo.completed ?
           'line-through' : 'none'
       }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                    { title }
                    <button style={btnStyle} onClick={this.props.delToDo.bind(this, id)}>x</button>
                </p>
            </div>
        );
    }
}

//PropTypes
ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delToDo: PropTypes.func.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color:  '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursos: 'pointer',
    float: 'right'
}

export default ToDoItem;