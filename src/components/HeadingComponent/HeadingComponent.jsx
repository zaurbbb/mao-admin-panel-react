import React from "react";

const HeadingComponent = ({children, textValue}) => {
    return (
        <div className="heading">
            <h1>
                {textValue}
            </h1>
            {children}
        </div>
    );
};

export default HeadingComponent;