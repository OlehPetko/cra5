import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";
import TodoCreateForm from "./TodoCreateForm";

function App() {
    const [list, setList] = useState([])
    const newList = [...list]
    const move = (id, direction) => {
        const firstIndex = list.findIndex((el) => el.id === id)
        const secondIndex = firstIndex + direction
        if (secondIndex < 0 || secondIndex > list.length - 1) {
            alert('CANNOT BE MOVED')
        } else {
            [newList[firstIndex], newList[secondIndex]] = [newList[secondIndex], newList[firstIndex]]
            setList(newList)
        }
    }
    const editItem = (id, newTodo) => {
        const newList = list.map(el => {
            if (el.id === id) return {...el, title: newTodo}
            return el
        })
        setList(newList)
    }
    const deleteItem = (id) => {
        const newList = [...list].filter(el => el.id !== id)
        setList(newList)
    }

    const changeDone = (id) => {
        const newList = list.map(el => {
            if (el.id === id) return {...el, done: !el.done}
            return el
        })
        setList(newList)
    }
    const create = (title) => {
        setList([...list, {id: Math.random() * 10, title, done: false}])
        }
    return (
        <div className='app'>
            <TodoList
                list={list}
                deleteItem={deleteItem}
                changeDone={changeDone}
                editItem={editItem}
                move={move}
            />
            <TodoCreateForm create={create}/>
        </div>
    )
}
export default App;
