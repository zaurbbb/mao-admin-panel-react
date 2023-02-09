import MainPage from "../pages/MainPage";

import AllUsersPage from "../pages/AllUsersPage";
import AllMedicinesPage from "../pages/AllMedicinesPage";
import AllPostsPage from "../pages/AllPostsPage";

import SingleUserPage from "../pages/SingleUserPage";
import SingleMedicinePage from "../pages/SingleMedicinePage";
import SinglePostPage from "../pages/SinglePostPage";

import CreateUserPage from "../pages/CreateUserPage";
import CreateMedicinePage from "../pages/CreateMedicinePage";

import LoginPage from "../pages/LoginPage";
import CreatePostPage from "../pages/CreatePostPage";


export const privateRoutes = [
    {path: "/", component: <MainPage />, id: 1},

    {path: "/users", component: <AllUsersPage />, id: 2},
    {path: "/medicines", component: <AllMedicinesPage />, id: 3},
    {path: "/posts", component: <AllPostsPage />, id: 4},

    {path: "/users/:userId", component: <SingleUserPage />, id: 5},
    {path: "/medicines/:medicineId", component: <SingleMedicinePage />, id: 5},
    {path: "/posts/:postId", component: <SinglePostPage />, id: 5},

    {path: "/createUser", component: <CreateUserPage />, id: 6},
    {path: "/createMedicine", component: <CreateMedicinePage />, id: 7},
    {path: "/createPost", component: <CreatePostPage />, id: 7},

    {path: "/editUser", component: <CreateUserPage />, id: 8},
    {path: "/editMedicine", component: <CreateMedicinePage />, id: 9},
    {path: "/editPost", component: <CreatePostPage />, id: 10},
];

export const publicRoutes = [
    {path: "/login", component: <LoginPage/>, id: 1},
];