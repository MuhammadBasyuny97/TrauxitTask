
export const validateCategory = (name) => {
    const errors = [];
    if( typeof name !== "string" || name.length < 3 ){
        errors.push("Name must be a string with at least 3 charcters");
    }
    return errors;
}