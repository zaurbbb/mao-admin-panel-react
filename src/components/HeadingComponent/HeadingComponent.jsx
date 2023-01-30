import React from "react";

const HeadingComponent = ({children, textValue}) => {
    return (
        <div className="heading">
            <h2>
                {textValue}
            </h2>
            {children}
        </div>
    );
};

export default HeadingComponent;