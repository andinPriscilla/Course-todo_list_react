import React from "react";

import Done from "./Done";

const DoneContainer = ({ tasksDone, handleDelete, handleTick }) => {
  return (
    <aside>
      <h3>Completed tasksDone</h3>
      {tasksDone.length > 0 ? (
        tasksDone.map((task) => (
          <Done
            key={task.id}
            task={task}
            tasksDone={tasksDone}
            handleDelete={handleDelete}
            handleTick={handleTick}
          />
        ))
      ) : (
        <h2>No tasksDone completed</h2>
      )}
    </aside>
  );
};

export default DoneContainer;
