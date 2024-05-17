import React from 'react';
import { Box, Flex, Heading, Icon, Input, InputGroup, InputLeftElement, Button } from '@chakra-ui/react';

import ProfileMenu from "./ProfileMenu.jsx";
import { FaBars } from "react-icons/fa";

const TopNav = ({ onOpen,title }) => {
  return (
    <Box p={7} bg="p.100" width="100%">
      <Flex
        width="100%"
        height={{ base: "auto", md: "16" }} 
        justifyContent="space-around" 
        alignItems="center" 
        mx="auto" 
        px={4} 
        wrap="wrap" 
      >
        
        <Button colorScheme="p.300" onClick={onOpen}>
          <Icon as={FaBars} color="p.300" />
        </Button>

        <Heading
          fontWeight="bold"
          fontSize={{ base: "xl", md: "2xl", lg: "3xl" }} 
          ml={{ base: 0, md: 100 }}
        >
          {title}
        </Heading>

        <ProfileMenu />
      </Flex>
    </Box>
  );
}

export default TopNav;
