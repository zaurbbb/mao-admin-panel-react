import React from "react";

import HeaderComponent from "../../../../components/HeaderComponent";

const GreetingModule = () => {
    return (
        <section className="greeting">
            <HeaderComponent textValue="Admin Panel v2.0"/>
            {/*<ButtonsGroupComponent data={pagesList}/>*/}
        </section>
    );
};

export default GreetingModule;