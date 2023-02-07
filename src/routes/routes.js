import { MainPage } from "../pages/MainPage";

import { AllUsersPage } from "../pages/AllUsersPage";
import { AllMedicinesPage } from "../pages/AllMedicinesPage";

import { SingleMedicinePage } from "../pages/SingleMedicinePage";

import { RegisterUserPage } from "../pages/RegisterUserPage";
import { RegisterMedicinePage } from "../pages/RegisterMedicinePage";

import { LoginPage } from "../pages/LoginPage";

export const privateRoutes = [
    {path: "/", component: <MainPage />, id: 1},

    {path: "/users", component: <AllUsersPage />, id: 2},
    {path: "/medicines", component: <AllMedicinesPage />, id: 3},
    {path: "/news", component: <h2>News page</h2>, id: 4},

    {path: "/medicines/:medicineId", component: <SingleMedicinePage />, id: 5},

    {path: "/registerUser", component: <RegisterUserPage />, id: 6},
    {path: "/registerMedicine", component: <RegisterMedicinePage />, id: 7},
];

export const publicRoutes = [
    {path: "/login", component: <LoginPage/>, id: 1},
];