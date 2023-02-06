import React from "react";

const CustomButtonUI = ({ textValue, className, onClick }) => {

    return (
        <button
            className={`${className} button`}
            onClick={onClick}
        >
            {textValue}
        </button>
    );
};

export default CustomButtonUI;