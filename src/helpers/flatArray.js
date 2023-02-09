export const flatArray = arr => {
    return arr.flatMap(el => {
        if (typeof el === 'object') {
            delete el.id;
            return Object.values(el);
        }
        return el;
    });
};