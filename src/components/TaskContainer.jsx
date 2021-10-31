import React, {useContext} from "react";

import Task from "./Task";
import MyContext from '../context/MyContext'


const TaskContainer = () => {
    const context = useContext(MyContext)

    const {tasks} = context

  return (
    <aside>
      <h3>Active Tasks</h3>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            
          />
        ))
      ) : (
        <h2>No Tasks pending</h2>
      )}
    </aside>
  );
};

export default TaskContainer;
