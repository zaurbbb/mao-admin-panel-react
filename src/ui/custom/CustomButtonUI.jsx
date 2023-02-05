import React from "react";

const CustomButtonUI = ({ textValue, className, onClick }) => {

    return (
        <div
            className={`${className} button`}
            onClick={onClick}
        >
            {textValue}
        </div>
    );
};

export default CustomButtonUI;