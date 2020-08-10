import React from 'react';
import './App.css';
import TodoListItem from "./TodoListItem";

function TodoList(props) {
    const {deleteItem, changeDone, editItem, move} = props
    return (
        <div className='app'>
            {props.list.map((el, index) => <TodoListItem
                id={el.id}
                title={el.title}
                done={el.done}
                key={el.id}
                index={index}
                changeDone={changeDone}
                deleteItem={deleteItem}
                editItem={editItem}
                move={move}
            />)}
        </div>
    )
}

export default TodoList
