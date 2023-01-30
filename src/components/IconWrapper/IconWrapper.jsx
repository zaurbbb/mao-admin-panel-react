import React from "react";

const IconWrapper = (props) => {
    return (
        <div
            className="icon"
            {...props}
        >
            {props.children}
        </div>
    );
};

export default IconWrapper;