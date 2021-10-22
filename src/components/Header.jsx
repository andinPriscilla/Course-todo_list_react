import React from 'react'


import Form from './Form'


const Header = ({task,setTask,handleSubmit,inputRef}) => {
    return (
        <header>
       
            <Form task={task} setTask={setTask} handleSubmit={handleSubmit} inputRef={inputRef}/>
        </header>
    )
}

export default Header
