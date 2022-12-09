import React from "react";

const shareFn = () => {
    console.log("implement sharing fn");
}

const ShareButton = () => {
    return (
        <button onClick={() => shareFn()}>Share</button>
    )
};

export default ShareButton;