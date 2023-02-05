import moment from "moment";

// transform userItem from object to array of values without password and updated_at
export const transformObjectToArrayValues = (dataKeys, objectItem) => {
    console.log("UsersTableBody render");
    return dataKeys
        .filter(key => {
            return !(key === "updated_at" || key === "password");
        })
        .map(key => {
            if (key === "created_at" || key === "date_of_birth") {
                return moment(objectItem[key]).format("MMMM Do YYYY, h:mm:ss a");
            }
            return objectItem[key];
        });
}