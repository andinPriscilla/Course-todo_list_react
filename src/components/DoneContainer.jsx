import React, {useContext} from "react";

import Done from "./Done";
import MyContext from "../context/MyContext";

const DoneContainer = () => {
  const context = useContext(MyContext)

  const {tasksDone} = context

  return (
    <aside>
      <h3>Completed tasksDone</h3>
      {tasksDone.length > 0 ? (
        tasksDone.map((task) => (
          <Done
            key={task.id}
            task={task}
            
          />
        ))
      ) : (
        <h2>No tasksDone completed</h2>
      )}
    </aside>
  );
};

export default DoneContainer;
