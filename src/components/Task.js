import React from "react";
import './Task.css'

const Task = ({task}) => {
  return <div className="TasksTable">{task.id} - {task.title}</div>  
}

export default Task ;