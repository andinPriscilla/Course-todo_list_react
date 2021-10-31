
import React, {useContext} from 'react';
import { TiTick } from 'react-icons/ti';
import { MdDelete } from 'react-icons/md';
import MyContext from '../context/MyContext';

const Task = ({ task }) => {
  const context = useContext(MyContext)

  const {tasks, handleDelete, handleTick} = context

  return (
    <div className='task-container'>
      <div className='tick'>
        <TiTick
          style={{
            fontSize: '22px',
          }}
          onClick={() => handleTick(task.id, tasks)} //Handle the tick functionality
        />
      </div>
      <div className='task'>
        <p>{task.task}</p>
      </div>
      <div className='bin'>
        <MdDelete
          style={{ fontSize: '22px' }}
          onClick={() => handleDelete(task.id, tasks)}
        />
      </div>
    </div>
  );
};
export default Task;





