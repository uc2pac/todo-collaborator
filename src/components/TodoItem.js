import React from "react";
import ListItem from "@mui/material/ListItem";
import DeleteButton from "./DeleteBtn";
import ShareButton from "./ShareBtn";
import Checkbox from "@mui/material/Checkbox";

const TodoItem = ({ text, status, id }) => {
    return (
        <ListItem 
        alignItems="flex-start"
        secondaryAction={
            <>
                <DeleteButton id={id}/> 
                <ShareButton/>
            </>
        }
        divider={true}
        >

            {text} 
        </ListItem>
    )  
};

export default TodoItem;