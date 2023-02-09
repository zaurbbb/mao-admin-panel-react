import moment from "moment/moment";

export const transformObjectToArray = (dataKeys, obj, type) => {
    switch (type) {
        case "medicines":
            return dataKeys
                .filter(key => {
                    return key === "id" || key === "general";
                })
                .map(key => {
                    if (key === "general") {
                        return [obj["general"].name_eng, obj["general"].class_eng, obj["general"].group];
                    }
                    return obj[key];
                });
        case "users":
            return dataKeys
                .filter(key => {
                    return !(key === "updated_at" || key === "password" || key === "created_at");
                })
                .map(key => {
                    if (key === "date_of_birth") {
                        return moment(obj[key]).format("MMMM Do YYYY");
                    }
                    return obj[key];
                });
        case "posts":
            return dataKeys
                .filter(key => {
                    return !(key === "updated_at" || key === "text" || key === "image_url");
                })
                .map(key => {
                    if (key === "created_at") {
                        return moment(obj[key]).format("MMMM Do YYYY HH:mm");
                    }
                    return obj[key];
                });

        case "medicineItem":
            return dataKeys
                .map(key => {
                    if (key === "general") {
                        return [...Object.values(obj[key]).filter((_, index) => index !== 0)];
                    }
                    return obj[key];
                });
        default:
            return dataKeys.map(key => {
                return obj[key];
            });
    }
}