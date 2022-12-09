import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";

import TodoItem from "./TodoItem";
// import data from "../todolist.json";
import { API, graphqlOperation } from "aws-amplify";
import { listTodos } from '../graphql/queries';
import { createTodo } from '../graphql/mutations';


// here we neeed to get all of the information from the backend and then pass it down 
// fields : text, status

// const initialState = {createdBy: '', text: ''}

const TodoList = () => {

    // const [todos, setTodos] = useState([]);
    // const [formState, setFormState] = useState(initialState);

    // const fetchTodos = async () => {
    //     try {
    //         const todoData = await API.graphql(graphqlOperation(listTodos))
    //         const todos = todoData.data.listTodos.items
    //         setTodos(todos);
    //     } catch (err) {console.log('error', err)}
    // };

    // useEffect(() => {
    //     fetchTodos();
    // }, []);

    // const setInput = (key, value) => {
    //     setFormState({...formState, [key]: value});
    // }

    // const addTodos = async () => {
    //     try {
    //         if (!formState.text) return;
    //         const todo = {...formState};
    //         setTodos([...todos, todo]);
    //         setFormState(initialState);
    //         await API.graphql(graphqlOperation(createTodo, {input: todo}));
    //     } catch (err) {console.log("error creating", err)}
    // }

    return (
       <Box margin={"5%"}>
           {/* <input onChange={(e) => setInput('text', e.target.value)} value={formState.description} placeholder="text"/>
           <button onClick={() => addTodos()}>Create todo</button> */}
            <List >
                {todos.map((todoItem) => {
                    return <TodoItem text={todoItem.text} status={todoItem.status} id={todoItem.id}/>
                })}
            </List>
       </Box>
    )
};

export default TodoList;