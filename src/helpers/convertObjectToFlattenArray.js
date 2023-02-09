import { transformObjectToArray } from "./transformObjectToArray";
import { flatArray } from "./flatArray";

export const convertObjectToFlattenArray = (obj, type) => {
    const objKeys = Object.keys(obj);
    const arrItem = transformObjectToArray(objKeys, obj, type);


        return flatArray(arrItem); // flatArray is a function that flattens an array of arrays
}