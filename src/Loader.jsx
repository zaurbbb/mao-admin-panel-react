import React, { memo } from "react";

const Loader = memo(() => {
    console.log("Loader render");
    return (
        <div className="loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
});

export default Loader;