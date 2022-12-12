import React, { useState } from "react";
import InputBase from '@mui/material/InputBase';
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";

const AddTodo = ({ onAdd }) => {
  const [todoText, setTodoText] = useState('');

  const onChange = ({ target: { value }}) => {
    setTodoText(value);
  }

  const onAddClick = () => {
    onAdd(todoText);
    setTodoText('');
  }

  return (
    <ListItem 
      secondaryAction={
        <Button variant="contained" onClick={onAddClick}>Add</Button>
      }
    >
      <InputBase
        value={todoText}
        onChange={onChange}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Todo text here"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
    </ListItem>
  )  
};

export default AddTodo;