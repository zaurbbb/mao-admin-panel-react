import React, { memo } from "react";

import CustomLabelUI from "../ui/custom/CustomLabelUI";
import CustomInputUI from "../ui/custom/CustomInputUI";
import CustomTextareaUI from "../ui/custom/CustomTextareaUI";

const FormElementComponent = memo(({
    labelTextValue,
    inputType,
    inputValue,
    inputOnChange,
    inputOnClick,
    textareaValue,
    textareaOnChange
}) => {
    const formElementClassName = `form__element`
    return (
        <div className={formElementClassName}>
            {labelTextValue &&
                <CustomLabelUI
                    textValue={labelTextValue}
                />
            }
            {textareaOnChange &&
                <CustomTextareaUI
                    value={textareaValue}
                    onChange={textareaOnChange}
                />
            }
            {inputType &&
                <CustomInputUI
                    value={inputValue}
                    onChange={inputOnChange}
                    type={inputType}
                    onClick={inputOnClick}
                />
            }
        </div>
    );
});

export default FormElementComponent;