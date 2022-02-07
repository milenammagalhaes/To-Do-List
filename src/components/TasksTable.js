import React from "react";
import Task from './Task'

const TasksTable = ({tasks}) => {
  return (
    <div>
      {tasks.map((task) => (
      <Task task={task}/>
      ))}
    </div>
  )
}

export default TasksTable ;