import { UsersPage } from "../pages/UsersPage/index";
import { MainPage } from "../pages/MainPage";
import { LoginPage } from "../pages/LoginPage";

export const privateRoutes = [
    {path: "/", component: <MainPage />, id: 1},
    {path: "/users", component: <UsersPage />, id: 2},
    {path: "/medicines", component: <h1>medicines</h1>, id: 3},
    {path: "/news", component: <h1>news</h1>, id: 4},
];

export const publicRoutes = [
    {path: "/login", component: <LoginPage/>, id: 1},
];