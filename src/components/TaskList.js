import React from "react";

function TaskList({tasks, onDeleteTask}) {

  const displayTask = tasks.map((task)=>{
    return <Task key={task.text} text={task.text} category={task.category} onDeleteTask={onDeleteTask} />
  })

  return (
    <div className="tasks">
      {displayTask}
    </div>
  );
}
export default TaskList;
