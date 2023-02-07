import React, { memo } from "react";
import { Link } from "react-router-dom";

import DeleteIconUI from "../icons/DeleteIconUI";

const TableItemUI = memo(({ item, onClick, link }) => {
    switch (item) {
        case "delete":
            item = <DeleteIconUI />
            break;
        default:
            break;
    }

    return (
        <div
            className="table__column"
            onClick={onClick}
        >
            {link ? <Link to={`${link}/${item}`}>{item}</Link> : item}
        </div>
    );
});

export default TableItemUI;