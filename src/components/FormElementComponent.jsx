import React, { memo } from "react";

import CustomLabelUI from "../ui/custom/CustomLabelUI";
import CustomInputUI from "../ui/custom/CustomInputUI";

const FormElementComponent = memo(({ elementClassName, labelTextValue, inputType, inputValue, inputOnChange, inputOnClick }) => {
    return (
        <div className="form__element">
            {labelTextValue &&
                <CustomLabelUI
                    textValue={labelTextValue}
                    className={elementClassName}
                />
            }
            <CustomInputUI
                value={inputValue}
                onChange={inputOnChange}
                type={inputType}
                className={elementClassName}
                onClick={inputOnClick}
            />
        </div>
    );
});

export default FormElementComponent;