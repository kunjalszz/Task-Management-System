import React from 'react'
import { Box, Button, Container, Flex, HStack, Heading, Icon, Input, Link, Stack, Text, background, useDisclosure } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { IoMdMenu } from "react-icons/io";
import { MdPendingActions } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { GrInProgress } from "react-icons/gr";
import { SiTicktick } from "react-icons/si";


const SideDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const content = [
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
      <>
          <Button ref={btnRef} colorScheme="p.300" variant="ghost" onClick={onOpen} size="lg">
              <Icon as={IoMdMenu} color='black' />
          </Button>

          <Drawer
              isOpen={isOpen}
              placement='left'
              onClose={onClose}
              finalFocusRef={btnRef}
          >
              <DrawerOverlay />
              <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader fontSize="4xl" fontWeight="bold">My Tasks</DrawerHeader>

                  <DrawerBody >
        
                     <Box >
                      <Button w="full" bg="p.100" borderRadius={50} mb={5} fontSize="3xl" justifyContent="space-evenly">
                    
                      <Icon as={IoIosAddCircle}  /><Text>Add Task</Text>
                    
                      </Button>
                      </Box>
                      <Stack  fontSize="2xl" gap={3} >
                      {content.map((item) => (
                          <Link href={item.link} key={item.title}>
                              <Text><Icon as={item.icon} mr={2}/>{item.title}</Text>
                          </Link>
                      ))}
                      </Stack>
            
                  </DrawerBody>
              </DrawerContent>
          </Drawer>
      </>
  );
}


export default SideDrawer