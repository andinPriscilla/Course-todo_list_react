import React, {useContext} from 'react'

import {v4 as uuidv4} from 'uuid'
import MyContext from '../context/MyContext'

const Form =() => {
    const context = useContext(MyContext)

    const {task, setTask, handleSubmit, inputRef} = context
    
    return (
        <form>
            <label>Please enter your task</label>
            <input  
            type="text" 
            value={task.task} 
            maxLength="100" 
            ref={inputRef} 
            onChange={(e) =>
             setTask({id: uuidv4(), task: e.target.value, done:false})}/>
            <button onClick={handleSubmit}>press</button>
        </form>
    )
}

export default Form
