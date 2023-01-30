import React from "react";

import navbar from "../../../../config/navbar";

import HeadingComponent from "../../../../components/HeadingComponent/HeadingComponent";
import ButtonsGroupComponent from "../../../../components/ButtonsGroupComponent/ButtonsGroupComponent";

const GreetingModule = () => {
    const pagesList = navbar.slice(1, -1);
    return (
        <section className="greeting">
            <HeadingComponent textValue="Admin Panel v2.0"/>
            <ButtonsGroupComponent data={pagesList}/>
        </section>
    );
};

export default GreetingModule;