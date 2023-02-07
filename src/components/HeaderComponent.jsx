import React, { memo } from "react";
import { Link } from "react-router-dom";

import PlusIconUI from "../ui/icons/PlusIconUI";
import CustomButtonUI from "../ui/custom/CustomButtonUI";

const HeaderComponent = memo(({ textValue, icon, link}) => {
    switch (icon) {
        case "plus":
            icon = <PlusIconUI />;
            break;
        default:
            icon = false;
    }

    return (
        <div className="header">
            <h1 className="header__heading">{textValue}</h1>
            {icon &&
                <Link to={link} className="header__link">
                    <CustomButtonUI
                        className="header__button button--plus"
                        textValue={icon}
                    />
                </Link>
            }
        </div>
    );
});

export default HeaderComponent;