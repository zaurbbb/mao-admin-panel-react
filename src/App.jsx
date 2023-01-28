import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";


const App = () => {
    return (
        <BrowserRouter>
            <main>
                <AppRouter />
            </main>
        </BrowserRouter>
    );
};

export default App;