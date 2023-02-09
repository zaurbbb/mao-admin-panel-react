import React, { memo } from "react";

const CustomInputUI = memo(props => {
    return (
        <input
            {...props}
            className="form__input input"
        />
    );
});

export default CustomInputUI;