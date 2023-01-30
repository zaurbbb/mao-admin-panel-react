import React from "react";
import { NavLink } from "react-router-dom";

import IconWrapper from "../IconWrapper/IconWrapper";

import { sidebarItemsList } from "./sidebarItemsList";


const Sidebar = () => {
    function isLinkActive(navData) {
        return navData.isActive ? "sidebar__item sidebar__item_active" : "sidebar__item";
    }

    function logout() {
        localStorage.removeItem("token");
    }

    return (
        <aside className="sidebar">
            {sidebarItemsList.map(item =>
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

export default Sidebar;