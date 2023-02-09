import React from "react";

const CardComponent = ({ arr }) => {
    return (
        <div>
            {arr.map((key, index) => {
                return index !== 0 && (
                    <div key={index}>
                        <span>{arr[index]}</span> <br /><br />
                    </div>
                );
            })}
        </div>
    );
};

export default CardComponent;