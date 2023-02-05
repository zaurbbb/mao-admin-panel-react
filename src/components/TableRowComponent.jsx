import React, { memo } from "react";
import TableItemUI from "../ui/table/TableItemUI";

const TableRowComponent = memo(({ data, onClick, icon }) => {
    return (
        <div className="table__row">
            {data.map((item, index) =>
                <TableItemUI
                    item={item}
                    key={index}
                />
            )}
            <TableItemUI
                item={icon}
                onClick={onClick}
            />
        </div>
    );
});

export default TableRowComponent;

