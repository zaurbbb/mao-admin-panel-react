import React from "react";

const TableHeaderComponent = ({data}) => {
    return (
        <div className="table table-head">
            {data.map((item, index) =>
                <div key={index}>
                    {item}
                </div>
            )}
        </div>
    );
};

export default TableHeaderComponent;