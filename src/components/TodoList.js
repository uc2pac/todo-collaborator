import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";

import TodoItem from "./TodoItem";
import data from "../todolist.json";

// here we neeed to get all of the information from the backend and then pass it down 
// fields : text, status

const TodoList = () => {
    console.log(data.todos);
    return (
       <Box margin={"5%"}>
            <List >
                {data.todos.map((todoItem) => {
                    return <TodoItem text={todoItem.text} status={todoItem.status} id={todoItem.id}/>
                })}
            </List>
       </Box>
    )
};

export default TodoList;