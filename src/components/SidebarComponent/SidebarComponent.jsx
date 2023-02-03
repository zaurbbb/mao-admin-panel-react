import React from "react";
import { NavLink } from "react-router-dom";

import { useAppDispatch } from "../../hooks/useAppDispatch";
import { setIsAuth } from "../../store/actions/authActions";
import navbar from "../../config/navbar";

import IconWrapper from "../IconWrapperComponent/IconWrapperComponent";

const SidebarComponent = () => {
    const dispatch = useAppDispatch();

    function isLinkActive(navData) {
        return navData.isActive ? "sidebar__item sidebar__item_active" : "sidebar__item";
    }

    function logout() {
        dispatch(setIsAuth(false));
    }

    return (
        <aside className="sidebar">
            {navbar.map(item =>
                <NavLink
                    to={item.path}
                    className={isLinkActive}
                    key={item.id}
                    onClick={item.id === 5 && logout}
                >
                    <IconWrapper>
                        {item.icon}
                    </IconWrapper>
                </NavLink>
            )}
        </aside>
    );
};

export default SidebarComponent;