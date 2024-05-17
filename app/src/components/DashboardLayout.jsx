import React from 'react';
import SideDrawer from './SideDrawer';
import { Box, Container, Flex, useDisclosure } from '@chakra-ui/react';
import TopNav from './TopNav';
import SideNav from './SideNav';


const DashboardLayout = ({title,children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
   
  return (
    <Flex maxW="100%" h="100vh">
      <SideDrawer isOpen={isOpen} onClose={onClose} />
      <Box flexGrow={1}>
        <TopNav onOpen={onOpen} title={title}/>
        <Container bg="p.50"  maxW="container.lg" py={4} px={4}>
          {children}
        </Container>
      </Box>
    </Flex>
  );
}

export default DashboardLayout;
