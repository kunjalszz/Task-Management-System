import React from "react";
import { Box, Button, Icon, Stack, Text } from "@chakra-ui/react";
import { IoMdMenu } from "react-icons/io";
import { MdPendingActions } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { GrInProgress } from "react-icons/gr";
import { SiTicktick } from "react-icons/si";
import { Link } from "react-router-dom"


const SideNav = () => {
    const content = [
        {
            title:"Dashboard",
            icon:MdPendingActions,
            link:"/",
        },
        {
            title: "Pending",
            icon: MdPendingActions,
            link: "/pending",
        },
        {
            title: "InProgress",
            icon: GrInProgress,
            link: "/in-progress",
        },
        {
            title: "Completed",
            icon: SiTicktick,
            link: "/completed",
        },
    ];
  
  return (
   <Stack>
    <Box>
                      <Button w="full" bg="p.100" borderRadius={50} mb={5} fontSize="3xl" justifyContent="space-evenly">
                    
                      <Icon
                       as={IoIosAddCircle}  /><Text>Add Task</Text>

                      </Button>
                      </Box>
                      <Stack  fontSize="2xl" gap={3} >
                      {content.map((item) => (
                          <Link to={item.link} key={item.title}>
                              <Text><Icon as={item.icon} mr={2}/>{item.title}</Text>
                          </Link>
                      ))}
                      </Stack>
   </Stack> 
  )
}

export default SideNav