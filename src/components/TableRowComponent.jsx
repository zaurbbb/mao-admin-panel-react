import React, { memo } from "react";

import TableItemUI from "../ui/table/TableItemUI";

const TableRowComponent = memo(({ data, onClick, icon, link }) => {
    return (
        <div className="table__row">
            {data.map((item, index) => {
                return <TableItemUI
                    item={item}
                    key={index}
                    link={index === 0 && link && link}
                />
            })}
            <TableItemUI
                item={icon}
                onClick={onClick}
            />
        </div>
    );
})
    ;

    export default TableRowComponent;

