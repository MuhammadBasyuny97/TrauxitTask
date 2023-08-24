import Categories  from "../model/category.js";

export  const validateBook = async (title, price,description,category) => {
    const errors = [];
    if( typeof title !== "string" || title.length < 3 ){
        errors.push("Title must be a string with at least 3 charcters");
    }

    if( typeof price !== "number" ){
        errors.push("Price must be a number");
    }

    if( typeof description !== "string" ){
        errors.push("Description must be a string");
    }

    if(typeof category !== "string"){
        errors.push("Description must be a string");
    }
  
  const Category = await Categories.findOne({ name: category});
    if(!Category){
            errors.push("Category must exist on categories list")
        }
    return errors;
}