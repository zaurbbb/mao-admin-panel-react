import React, { memo } from "react";

import CustomLabelUI from "../ui/custom/CustomLabelUI";
import CustomInputUI from "../ui/custom/CustomInputUI";
import CustomTextareaUI from "../ui/custom/CustomTextareaUI";

const FormElementComponent = memo(({
    elementClassName,
    labelTextValue,
    inputType,
    inputValue,
    inputOnChange,
    inputOnClick,
    textareaValue,
    textareaOnChange
}) => {
    const formElementClassName = `${elementClassName}__element`
    return (
        <div className={formElementClassName}>
            {labelTextValue &&
                <CustomLabelUI
                    textValue={labelTextValue}
                    className={elementClassName}
                />
            }
            {textareaOnChange &&
                <CustomTextareaUI
                    value={textareaValue}
                    onChange={textareaOnChange}
                    className={elementClassName}
                />
            }
            {inputType &&
                <CustomInputUI
                    value={inputValue}
                    onChange={inputOnChange}
                    type={inputType}
                    className={elementClassName}
                    onClick={inputOnClick}
                />
            }
        </div>
    );
});

export default FormElementComponent;