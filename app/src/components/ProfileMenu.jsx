import { Box, Button, Container, Icon } from '@chakra-ui/react'
import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
  import { CgProfile } from "react-icons/cg";

const ProfileMenu = () => {
  return (
       <Box>
         <Menu>
  <MenuButton  >
    <Icon as={CgProfile} fontSize={34} color="p.300" />
  </MenuButton>
  <MenuList>
    <MenuItem>My Profile</MenuItem>
    <MenuItem>LogOut</MenuItem>
  </MenuList>
</Menu>
       </Box>
        
  )
}

export default ProfileMenu