import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import TaskList from '../../components/TaskList/TaskList';
import axios from "axios";

const PendingTasks = () => {
  const [tasks,setTasks]=useState([]);

  useEffect(()=>{
    const fetchTasks=async()=>{
      try{
        const backendPort = import.meta.env.VITE_BACKEND_PORT;
        const response = await axios.get(`${backendPort}/tasks/Pending`);
        console.log(response.data);
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
    <DashboardLayout title={"Pending Tasks"}>
      <TaskList  tasks={tasks}/>
    </DashboardLayout>
  )
}

export default PendingTasks