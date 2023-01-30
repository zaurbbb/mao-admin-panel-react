import React from "react";
import { Link } from "react-router-dom";

import CustomButtonUI from "../../ui/custom/CustomButtonUI";

const ButtonsGroupComponent = ({ data }) => {
    return (
        <div className="buttons-group">
            {data.map((item, index) =>
                <Link
                    to={item.path}
                    key={index}
                >
                    <CustomButtonUI
                        key={index}
                        className="buttons-group__button"
                        textValue={`${item.textValue} management`}
                    />
                </Link>
            )}
        </div>
    );
};

export default ButtonsGroupComponent;