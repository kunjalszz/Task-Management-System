import React from 'react'
import DashboardLayout from './components/DashboardLayout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import PendingTasks from './pages/PendingTasks/PendingTasks.jsx'
import InProgressTasks from './pages/InProgressTasks/InProgressTasks.jsx'
import CompletedTasks from './pages/CompeletedTasks/CompletedTasks.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
  },
  {
    path: "/pending",
    element: <PendingTasks/>,
  },
  {
    path: "/in-progress",
    element: <InProgressTasks/>,
  },
  {
    path: "/completed",
    element: <CompletedTasks/>,
  },
]);

const App = () => {
  return (
    <>
  <RouterProvider router={router} />
    </>
  )
}

export default App