import {
  HStack,
  VStack,
  Text,
  Flex,
  Badge,
  Button,
  Input,
  Divider,
} from '@chakra-ui/react';
import { IconContext } from "react-icons"
import { TiHomeOutline, TiCogOutline, TiDocumentText, TiShoppingCart, TiEdit, TiDelete } from 'react-icons/ti';
import React, { useState } from 'react';

function OrgList({ todos, deleteTodo, editTodo }) {
  return !todos.length ? (
    <Badge colorScheme="purple" variant="outline" borderRadius="4" p="4" m="5">
      No todos for Today!!
    </Badge>
  ) : (
    <VStack w="100%">
      {todos.map((todo) => (
        <HStack key={todo.id} w="100%">
          <Flex py={3} w="100%" justifyContent="space-between">
            <Text fontSize="md">{todo.text}</Text>
            <Flex color="gray.500" w="24%" justifyContent="space-between">
              <IconContext.Provider value={{ size: "2em" }}>
        <TiHomeOutline />
        <TiCogOutline />
        <TiDocumentText />
        <TiShoppingCart />
                <TiDelete onClick={() => deleteTodo(todo.id)} />
                <TiEdit onClick={() => handleEditClick(todo)} />
              </IconContext.Provider>
            </Flex>
          </Flex>
        </HStack>
      ))}
    </VStack>
  );
}

export default OrgList;
