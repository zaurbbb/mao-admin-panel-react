import { UsersPage } from "../pages/UsersPage/index";

export const privateRoutes = [
    {path: "/", component: <h1>Main Page</h1>, id: 1},
    {path: "/users", component: <UsersPage />, id: 2},
];

// export const publicRoutes = [
//     {path: "/login", component: <h1>Login</h1>, id: 1},
//     {path: "/", component: <h1>Home</h1>, id: 2},
// ];