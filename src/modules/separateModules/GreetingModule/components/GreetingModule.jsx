import React from "react";

import HeadingComponent from "../../../../components/HeadingComponent/HeadingComponent";

const GreetingModule = () => {
    return (
        <section className="greeting">
            <HeadingComponent textValue="Admin Panel v2.0"/>
            {/*<ButtonsGroupComponent data={pagesList}/>*/}
        </section>
    );
};

export default GreetingModule;