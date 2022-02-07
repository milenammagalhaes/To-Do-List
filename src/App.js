import React, {useState} from "react";
import './App.css'
import TasksTable from "./components/TasksTable";


const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar React',
      completed: false,
    },
    {
      id: '2',
      title: 'Estudar Ingles',
      completed: true,
    },
  ]);

  return (
    <div>
      <div className="container"> 
      <TasksTable tasks={tasks} />    
      </div>
    </div> 
  );
};

export default App;