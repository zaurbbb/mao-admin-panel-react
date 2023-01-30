import HomeIcon from "../../ui/icons/HomeIcon";
import UsersGroupIcon from "../../ui/icons/UsersGroupIcon";
import LogoutIcon from "../../ui/icons/LogoutIcon";
import NewsIcon from "../../ui/icons/NewsIcon";
import MedicinesIcon from "../../ui/icons/MedicinesIcon";

export const sidebarItemsList = [
    { id: 1, path: '/', icon: <HomeIcon />},
    { id: 2, path: '/users', icon: <UsersGroupIcon /> },
    { id: 3, path: '/medicines', icon: <MedicinesIcon /> },
    { id: 4, path: '/news', icon: <NewsIcon /> },
    { id: 5, path: '/logout', icon: <LogoutIcon /> },
];