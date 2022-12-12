import React from "react";
import ListItem from "@mui/material/ListItem";
import Checkbox from "@mui/material/Checkbox";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import TodoActions from './TodoActions';

const TodoItem = ({ text, status, id, onDelete, onShare, onDone }) => {

  const onTodoDelete = () => {
    onDelete(id);
  }

  const onTodoShare = () => {
    onShare(id);
  }

  const onTodoDone = () => {
    onDone(id);
  }

  if (status === 'done') {
    return (
      <ListItem>
        <ListItemButton role={undefined} dense>
          <ListItemIcon>
            <Checkbox
              edge="start"
              tabIndex={-1}
              disableRipple
              disabled
              inputProps={{ 'aria-labelledby': id }}
            />
          </ListItemIcon>
          <ListItemText id={id} primary={text} sx={{ textDecoration: 'line-through', color: 'gray' }}/>
        </ListItemButton>
      </ListItem>
    )
  }
  
  return (
    <ListItem 
      secondaryAction={
        <TodoActions onDelete={onTodoDelete} onShare={onTodoShare} />
      }
    >
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': id }}
            onChange={onTodoDone}
          />
        </ListItemIcon>
        <ListItemText id={id} primary={text} />
      </ListItemButton>
    </ListItem>
  )  
};

export default TodoItem;