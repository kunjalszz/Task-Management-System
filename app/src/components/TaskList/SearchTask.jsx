import { Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { CiSearch } from "react-icons/ci";
import React from 'react'

const SearchTask = () => {
  return (
    <InputGroup bg="p.100" borderRadius={50} w={{ base: 'full', md: '250px' }}> 
    <InputLeftElement pointerEvents='none' color="p.300">
      <Icon as={CiSearch} />
    </InputLeftElement>
    <Input type='text' placeholder='Search Task' _placeholder={{ color:"p.300" }} />
  </InputGroup>
  )
}

export default SearchTask