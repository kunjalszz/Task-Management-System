import React from "react";
import { Card as ChakraCard } from "@chakra-ui/react";
const Card = ({ children, ...props }) => {
  return (
    <ChakraCard
      bg="p.100"
      p={{
        base: "4",
        md: "6",
      }}
      borderRadius={{
        base: "1rem" ,
        md: "1rem",
      }}
      boxShadow={{
        base: "md",
        md: "lg",
      }}
      gap={8}
      {...props}
    >
      {children}
    </ChakraCard>
  );
};

export default Card;