import { UsersPage } from "../pages/UsersPage/index";
import { MainPage } from "../pages/MainPage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterUserPage } from "../pages/RegisterUserPage";

export const privateRoutes = [
    {path: "/", component: <MainPage />, id: 1},

    {path: "/users", component: <UsersPage />, id: 2},
    {path: "/medicines", component: <h2>Medicines page</h2>, id: 3},
    {path: "/news", component: <h2>News page</h2>, id: 4},

    {path: "/registerUser", component: <RegisterUserPage />, id: 5},
];

export const publicRoutes = [
    {path: "/login", component: <LoginPage/>, id: 1},
];