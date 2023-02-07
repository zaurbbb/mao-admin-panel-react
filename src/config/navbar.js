import HomeIconUI from "../ui/icons/HomeIconUI";
import UsersGroupIconUI from "../ui/icons/UsersGroupIconUI";
import MedicinesIconUI from "../ui/icons/MedicinesIconUI";
import NewsIconUI from "../ui/icons/NewsIconUI";
import LogoutIconUI from "../ui/icons/LogoutIconUI";

const navbar = [
    {
        id: 1,
        path: `/`,
        section: "home",
        textValue: "Home",
        icon: <HomeIconUI />
    },
    {
        id: 2,
        path: `/users`,
        section: "users",
        textValue: "Users",
        icon: <UsersGroupIconUI />
    },
    {
        id: 3,
        path: `/medicines`,
        section: "medicines",
        textValue: "Medicines",
        icon: <MedicinesIconUI />
    },
    {
        id: 4,
        path: `/posts`,
        section: "news",
        textValue: "News",
        icon: <NewsIconUI />
    },
    {
        id: 5,
        path: `/logout`,
        section: "",
        textValue: "",
        icon: <LogoutIconUI />
    },
];

export default navbar;