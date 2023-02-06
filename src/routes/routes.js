import { UsersPage } from "../pages/usersPages/AllUsersPage";
import { MainPage } from "../pages/separatePages/MainPage";
import { LoginPage } from "../pages/separatePages/LoginPage";
import { RegisterUserPage } from "../pages/usersPages/RegisterUserPage";

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