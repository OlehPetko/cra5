import React, {useState} from 'react';
import './App.css';

function TodoCreateForm(props) {
    const [inputValue, setInput] = useState('')

    const cancelForm = () => {
        setInput('')
    }
    const onCreate = () => {
        props.create(inputValue)
        setInput('')
    }


    return (
        <div className='app'>
            <input className='input' placeholder='new note' value={inputValue}
                   onChange={e => setInput(e.target.value)}/>
            <button className='button' onClick={onCreate}>CREATE</button>
            <button className='button-r' onClick={cancelForm}>CANCEL</button>
        </div>
    )
}

export default TodoCreateForm