import React from "react";
import moment from "moment";

const TableUserItemComponent = ({ itemData }) => {
    // itemData = id, email, full_name, date_of_birth, region, city, specialization
    console.log("itemData", itemData);
    const itemDataKeys = Object.keys(itemData);
    const userData = itemDataKeys.map(key => {
        switch (key) {
            case "updated_at":
            case "password":
                return null;
            case "created_at":
            case "date_of_birth":
                return moment(itemData[key]).format("MMMM Do YYYY, h:mm:ss a");
            default:
                return itemData[key];
        }
    });
    console.log("userData", userData);
    return (
        <div className="table table-body">
            {userData.map((item, index) =>
                <span key={index}>
                    {item}
                </span>
            )}
        </div>
    );
};

export default TableUserItemComponent;