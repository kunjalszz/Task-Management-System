import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DashboardLayout from '../../components/DashboardLayout';
import { Center, Flex, HStack, Heading, Spinner } from '@chakra-ui/react';
import Card from "../../components/Card"
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';


const Dashboard = () => {
  const [taskCount, setTaskCount] = useState({
    pending: 0,
    inProgress: 0,
    completed: 0
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const backendPort = import.meta.env.VITE_BACKEND_PORT;
        const response = await axios.get(`${backendPort}/task-count`);
        console.log(response.data)
        setTaskCount(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching task count:", error);
        setIsLoading(false);
      }
    };
  
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <Center>
        <Spinner />
      </Center>
    );
  }
  return (
    <DashboardLayout title={"Dashboard"}>
      <Flex  as='section' justifyContent='center' alignItems='center' minHeight='100vh'>
        <Card shadow='md'>
        <Heading>PROGRESS:</Heading>
          <HStack flexDirection={{base:"column",md:"row"}}>
            
            <CircularProgress value={taskCount?.pendingCount || 0} size="240px">
              <CircularProgressLabel fontWeight="medium" fontSize="xl" color={"p.300"}>Pending</CircularProgressLabel>
            </CircularProgress>
            <CircularProgress value={taskCount?.inProgressCount} size="240px">
              <CircularProgressLabel fontWeight="medium" fontSize="xl" color={"p.300"}>InProgress</CircularProgressLabel>
            </CircularProgress>
            <CircularProgress value={taskCount?.completedCount} size="240px">
              <CircularProgressLabel fontWeight="medium" fontSize="xl" color={"p.300"}>Completed</CircularProgressLabel>
            </CircularProgress>
          </HStack>
        </Card>
      </Flex>
    </DashboardLayout>
  );
};

export default Dashboard;
