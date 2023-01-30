import React from "react";

const CustomButtonUI = ({ textValue, className }) => {

    return (
        <button className={`${className} button`}>
            {textValue}
        </button>
    );
};

export default CustomButtonUI;