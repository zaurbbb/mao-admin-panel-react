import React from "react";

import Sidebar from "./components/Sidebar/Sidebar";
import AppRouter from "./AppRouter";

const App = () => {
    return (
        <div className="app">
            <Sidebar />
            <main>
                <AppRouter />
            </main>
        </div>
    );
};

export default App;