import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import axios from "axios";
import TaskList from '../../components/TaskList/TaskList';
function InProgressTasks() {
  const [tasks,setTasks]=useState([]);

  useEffect(()=>{
    const fetchTasks=async()=>{
      try{
        const backendPort = import.meta.env.VITE_BACKEND_PORT;
        const response = await axios.get(`${backendPort}/tasks/InProgress`);
        setTasks(response.data);
      }
      catch(error)
      {
        console.error("Error:",error);
      }
    };
    fetchTasks(); 
  },[]);
  return (
    <DashboardLayout title={"InProgress Tasks"}>
      <TaskList  tasks={tasks}/>
    </DashboardLayout>
  )
}

export default InProgressTasks