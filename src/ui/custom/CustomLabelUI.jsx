import React, {
    memo,
    useMemo
} from "react";

const CustomLabelUI = memo(({ className, textValue }) => {
    const labelClassName = useMemo(() => {
        return className ? `${className}__label label` : "label"
    }, [className]);

    return (
        <label className={labelClassName}>
            {textValue}
        </label>
    );
});

export default CustomLabelUI;