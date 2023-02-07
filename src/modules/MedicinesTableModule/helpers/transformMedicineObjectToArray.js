// transform medicine object from object to array of values with id, class_eng and name_eng values
export const transformMedicineObjectToArray = (dataKeys, objectItem) => {
    return dataKeys
        .filter(key => {
            return key === "id" || key === "general";
        })
        .map(key => {
            if (key === "general") {
                return [objectItem["general"].name_eng, objectItem["general"].class_eng]
            }
            return objectItem[key];
        });
}