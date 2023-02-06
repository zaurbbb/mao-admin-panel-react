import React, {
    memo,
    useMemo
} from "react";

const CustomInputUI = memo((props) => {
    const className = props.className;

    const inputClassName = useMemo(() => {
        return className ? `${className}__input input` : "input"
    }, [className]);

    return (
        <input
            {...props}
            className={inputClassName}
        />
    );
});

export default CustomInputUI;