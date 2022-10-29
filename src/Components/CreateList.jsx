import React from 'react'
import { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bulma/css/bulma.min.css'

const CreateList = ({addList}) => {

    const [input, setInput] = useState('')

    const onChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!input){return;}
        addList(input)
        setInput('')
    }

  return (
        <form onSubmit={handleSubmit}>
         <div class="field has-addons">
            <div class="control">
            <input class="input is-small is-hovered" type="text" placeholder="Some task"
              value={input} onChange={onChange}/>
            </div>
            <div class="control">
            <button disabled={!input} class="button is-small is-link ">Add List</button>
            </div>
         </div>
        </form>
  )
}

export default CreateList