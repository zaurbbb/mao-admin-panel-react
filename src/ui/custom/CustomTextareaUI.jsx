import React, {
    memo,
    useMemo
} from "react";

const CustomTextareaUi = memo(props => {
    const className = props.className;

    const textareaClassName = useMemo(() => {
        return className ? `${className}__textarea textarea` : "textarea"
    }, [className]);

    return (
        <textarea
            {...props}
            rows={10}
            cols={10}
            className={textareaClassName}
        />
    );
});

export default CustomTextareaUi;