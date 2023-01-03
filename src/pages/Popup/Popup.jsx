import React from 'react';
import { VStack, Text } from '@chakra-ui/react';

// https://react-icons.github.io/react-icons
import { TiCog } from 'react-icons/ti';

import { useState } from 'react';
import OrgList from '../../components/OrgList';

const Popup = () => {
  const todosList = [
    { id: 1, text: 'Buy eggs' },
    { id: 2, text: 'Walk the dog' },
    { id: 3, text: 'Watch a movie' },
  ];

  const [todos, setTodos] = useState(todosList);

  function deleteTodo(id) {
    const newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
    console.log(newTodos);
  }

  function addTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }

  function editTodo(id, updatedTodo) {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    setTodos(updatedItem);
  }

  return (
    <VStack p={5} w='500px'>
      <Text
        bgGradient="linear(to-l, #7928CA,#FF0080)"
        bgClip="text"
        fontSize="2xl"
        fontWeight="extrabold"
      >Salesforce Org Manager</Text>
      <OrgList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </VStack>
  );
};

export default Popup;
