import React, {useState} from 'react';
import './App.css';

function TodoListItem(props) {
    const {deleteItem, changeDone, editItem, move, id, index,  done, title} = props
    const titleStyle = done? {
        textDecoration: 'line-through', listStyleType: 'none'
    } : {
        listStyleType: 'none'
    }
    const [newTodo, setNewTodo] = useState(title)
    const [edit, setEdit] = useState(false)
    const cancelList = () => {
        setNewTodo('')
    }
    const inputHandler = (e) => {
        setNewTodo(e.target.value)
    }
    const saveButton = () => {
        editItem(id, newTodo)
        setEdit(false)
    }

    if (edit) {
        return (
            <div>
                <input className='input' placeholder='new note' onChange={inputHandler} value={newTodo}/>
                <button className='button' onClick={saveButton}>SAVE</button>

                <button className='button-r' onClick={cancelList}>CANCEL</button>

            </div>
        )
    } else {
        return (
            <div style={titleStyle}>
                <span className='span'> {index + 1} {title}</span>
                <button type='checkbox' className='button' onClick={() => changeDone(id)}>{done? ' UNMARK' : ' DONE'}</button>
                <button className='button-r' onClick={() => deleteItem(id)}>DELETE</button>
                <button className='button' onClick={() => setEdit(true)}>EDIT</button>
                <button className='button' onClick={() => move(id, -1)}>UP</button>
                <button className='button' onClick={() => move(id, 1)}>DOWN</button>

            </div>
        )
    }
}

export default TodoListItem
