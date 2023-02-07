import moment from "moment";

// transform dataItem from object to array of values without password and updated_at
export const transformUserObjectToArray = (dataKeys, objectItem) => {
    return dataKeys
        .filter(key => {
            return !(key === "updated_at" || key === "password" || key === "created_at");
        })
        .map(key => {
            if (key === "date_of_birth") {
                return moment(objectItem[key]).format("MMMM Do YYYY");
            }
            return objectItem[key];
        });
}