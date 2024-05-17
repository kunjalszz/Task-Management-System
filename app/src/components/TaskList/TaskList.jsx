import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Card.jsx';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Stack,
} from '@chakra-ui/react';
import SearchTask from './SearchTask.jsx';
import { FaCaretDown } from 'react-icons/fa';

const TaskList = ({ tasks }) => {
  const [updatedTasks, setUpdatedTasks] = useState(tasks);
  const [showModal, setShowModal] = useState(false);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setUpdatedTasks(tasks); // Initialize updatedTasks with tasks when the component mounts
  }, [tasks]);

  const handleButtonClick = (index) => {
    console.log("Button clicked, index:", index);
    setSelectedTaskIndex(index);
    console.log(updatedTasks);
    setProgress(updatedTasks[index]?.progress || 0);
    setShowModal(true);
  };

  useEffect(() => {
    if (selectedTaskIndex !== null && selectedTaskIndex >= 0 && selectedTaskIndex < updatedTasks.length) {
      setProgress(updatedTasks[selectedTaskIndex]?.progress || 0);
    }
  }, [selectedTaskIndex, updatedTasks]);

  const updateTaskProgress = (index, newProgress) => {
    if (index !== null && index >= 0 && index < updatedTasks.length) {
      setUpdatedTasks((prevTasks) => {
        const newTasks = [...prevTasks];
        newTasks[index] = {
          ...newTasks[index],
          progress: newProgress,
        };
        return newTasks;
      });
    }
  };

  const handleSliderChange = (newProgress) => {
    setProgress(newProgress);
    console.log(progress);
    if (selectedTaskIndex !== null) {
      updateTaskProgress(selectedTaskIndex, newProgress);
      console.log(updatedTasks);
    }
  };

  const handleSaveProgress = async (newprogress) => {
    
    console.log('handleSaveProgress called');
      const updatedTask = updatedTasks[selectedTaskIndex];
      const { progress: updatedProgress, _id } = updatedTask;

      console.log('Updated Progress:', updatedProgress);

      try {
        const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
        console.log(`Sending PATCH request to ${backendUrl}/tasks/${_id}/progress`);
        
        const response = await axios.patch(`http://localhost:5000/tasks/${_id}/progress`, null, {
          params: {
            progress: progress // Assuming 'progress' is the variable containing the progress value
          }
        });
        console.log("Response:", response.data);

        if (response.status === 200) {
          console.log('Progress updated successfully');
          setUpdatedTasks((prevTasks) => {
            const newTasks = [...prevTasks];
            newTasks[selectedTaskIndex] = response.data.task;
            return newTasks;
          });
          setShowModal(false);
        } else {
          console.error('Failed to update progress', response);
        }
      } catch (error) {
        console.error('Error updating progress:', error);
      }
    
  };

  return (
    <Card>
      <HStack flexDirection="row" justify="space-between">
        <SearchTask />
        <Menu>
          <MenuButton as={Button} rightIcon={<FaCaretDown />}>
            Filter By
          </MenuButton>
          <MenuList>
            <MenuItem>Task Name</MenuItem>
            <MenuItem>Creation Date</MenuItem>
            <MenuItem>Priority</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
      <Stack mt={4}>
        {tasks.length === 0 ? (
          <Box>No Tasks To Display</Box>
        ) : (
          <Accordion defaultIndex={[0]} allowMultiple>
            {tasks.map((task, index) => (
              <AccordionItem key={task._id || index}>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      {task.title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <p>{task.description}</p>
                  <p>Due Date: {task.dueDate}</p>
                  <p>Priority: {task.priority}</p>
                  <p>Progress: {task.progress}</p>
                  <p>Created On: {task.createdAt}</p>
                  <Button mt={2} onClick={() => handleButtonClick(index)}>
                    Update Progress
                  </Button>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </Stack>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Progress</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Slider aria-label="progress-slider" value={progress} onChange={handleSliderChange}>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb boxSize={6} />
            </Slider>
          </ModalBody>
          <ModalFooter>
            <Button onClick={()=>handleSaveProgress(progress)} colorScheme="blue" mr={3}>
              Save Progress
            </Button>
            <Button onClick={() => setShowModal(false)}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Card>
  );
};

export default TaskList;
