import React, { Fragment } from 'react'
import { useState } from 'react'
import CreateList from './CreateList'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bulma/css/bulma.min.css'

const List = ({list, index, onCompleted, onDelete}) => {
  return (
       <Fragment>
        <li className='task'>{list.title}
         <button className='btn-deleted'
          onClick={() => onDelete(index)}>X</button>
         <button className='btn-completed' 
          style={{background: list.completed ? 'green' : 'transparent'}}
          onClick={() => onCompleted(index)}>&#10003;</button>
        </li>
       </Fragment>
  )
}

const ToDoList = () => {
    const [lists, setLists] = useState([
      {
        title: 'JavaScript', 
        completed: false
      },
      {
        title: 'React', 
        completed: true
      },
      {
        title: 'Node.js', 
        completed: false
      },
      {
        title: 'Mongo db', 
        completed: true
      },
      {
        title: 'Phyton', 
        completed: false
      },
    ])

    const Add = (title) => {
      const newtitle = [...lists, {title, completed: false}]
      setLists(newtitle)
    }

    const completedList = (index) => {
      const newstate = [...lists]
      newstate[index].completed = !lists[index].completed
      setLists(newstate)
    }

    const deleteList = (index) => {
      const clear = lists.filter(( v, i) => { 
        return i !== index})
      setLists(clear)
    }

  return (
      <div className='container-todo'>
         <p class="title is-3 has-text-white">To Do List</p>
         <CreateList addList={Add}/>
         <div>{lists.map((value, index) => {
                return <List key={index}
                             list={value}
                             index={index}
                             onCompleted={completedList}
                             onDelete={deleteList}/>
            })}
         </div>
      </div>

  )
}

export default ToDoList