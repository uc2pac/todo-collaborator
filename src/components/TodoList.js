import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";

import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import ShareDialog from "./ShareDialog";
// import data from "../todolist.json";
import { API, graphqlOperation } from "aws-amplify";
import { listTodos } from '../graphql/queries';
import { createTodo, deleteTodo, updateTodo } from '../graphql/mutations';


const TodoList = ({ user }) => {
  const [todos, setTodos] = useState([]);
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);

  const fetchTodos = async () => {
      try {
          const todoData = await API.graphql(graphqlOperation(listTodos))
          const todos = todoData.data.listTodos.items
          setTodos(todos);
      } catch (err) {
        console.log('error', err)
      }
  };

  useEffect(() => {
      fetchTodos();
  }, []);

  const onTodoAdd = async (text) => {
    const newTodo = {
      createdBy: user.username,
      sharedWith: [],
      text,
      status: "active",
    }

    try {
      await API.graphql(graphqlOperation(createTodo, {input: newTodo}));
      setTodos((todos) => [...todos, newTodo]);
    } catch (err) {
      console.log("error creating todo", err);
    }
  }

  const onDelete = async (id) => {
    try {
      await API.graphql(graphqlOperation(deleteTodo, {input: { id }}));
      setTodos((todos) => todos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error("error deleting todo", error);
    }
  }

  const onShare = async (id) => {
    setIsShareDialogOpen(true);
    // try {
    //   const input = {
    //     id,
    //     status: 'done'
    //   };

    //   await API.graphql(graphqlOperation(updateTodo, { input }));
    // } catch (error) {
    //   console.error("error sharing todo", error);
    // }
  }

  const onDone = async (id) => {
    try {
      const input = {
        id,
        status: 'done'
      };
  
      await API.graphql(graphqlOperation(updateTodo, { input }));
    
      setTodos((todos) => todos.map(todo => ({
        ...todo,
        status: todo.id === id ? 'done' : todo.status
      })));
    } catch (error) {
      console.error("error updating todo", error);
    }
  }

  return (
    <Box>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <AddTodo onAdd={onTodoAdd} />
      
        {todos.map((todoItem) => {
          return (
            <TodoItem
              text={todoItem.text}
              status={todoItem.status}
              id={todoItem.id}
              key={todoItem.id}
              onDelete={onDelete}
              onShare={onShare}
              onDone={onDone}
            />
          )
        })}
      </List>

      <ShareDialog isOpen={isShareDialogOpen} onClose={setIsShareDialogOpen} />
    </Box>
  )
};

export default TodoList;