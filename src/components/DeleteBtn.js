import React from "react";

const deleteFn = () => {
    console.log("implement delete fn")
}

const DeleteButton = ({ id }) => {
    return (
        <button onClick={() => deleteFn()}>Remove</button>
    )
};

export default DeleteButton;