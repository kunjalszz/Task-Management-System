import React from 'react'
import { Box, Button, Container, Flex, HStack, Heading, Icon, Input, Link, Stack, Text, background, useDisclosure } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
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
import SideNav from './SideNav';


const SideDrawer = ({isOpen,onClose}) => {


  return (
      <>
         

          <Drawer
              isOpen={isOpen}
              placement='left'
              onClose={onClose}
          >
              <DrawerOverlay />
              <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader fontSize="4xl" fontWeight="bold">My Tasks</DrawerHeader>
                  <DrawerBody >
        
                     <SideNav/>
            
                  </DrawerBody>
              </DrawerContent>
          </Drawer>
      </>
  );
}


export default SideDrawer