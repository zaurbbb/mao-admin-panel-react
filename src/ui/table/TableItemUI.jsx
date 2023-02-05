import React, { memo } from "react";

const TableItemUI = memo(({ item, onClick }) => {
    return (
        <div
            className="table__column"
            onClick={onClick}
        >
            {item}
        </div>
    );
});

export default TableItemUI;