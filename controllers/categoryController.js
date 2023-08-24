
import { validateCategory } from './../middleware/categoryValidation.js';

import  Category  from '../model/category.js';


export const getCategories = async (req,res) => {
  const categories = await Category.find({});
    res.status(200).send(categories);
    res.end();
}

export const getCategory = async (req,res) => {
  const { id: categoryID } = req.params;
  const category = await Category.findOne({ _id: categoryID });
    if(category){
     res.status(200).send(JSON.stringify(category));
    }else{
    
     res.status(404).send("Category is not Found");
    }   
     res.end();
}



export const createCategory =async (req,res) => {
  try{
    const {name} = req.body;
    const errors = validateCategory(name);
    if(errors.length > 0){
      res.status(401).json(errors);
    }
    const category = await Category.create(req.body);
    res.status(201).json({ category });
    }
      
     catch(error){
      res.status(500).json({
                              "Message":"Invalid Data",
                              "Error": error 
                            });
     }                               
      res.end();
   }


export const updateCategory = async (req,res) => {
  try{

      const {name} = req.body;
      let errors = [];
      errors = validateCategory(name);
      if(errors.length > 0){
        res.status(401).json(errors);
      }

      const { id: categoryID } = req.params;
      const category = await Category.findOneAndUpdate(
        { _id: categoryID },
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );
      if (!category) {
        res.status(404).json({ Error: "Category Not Found!" });
      }
      res.status(200).json({ category });
    }
    
   catch(error){
    res.status(500).json({
                            "Message":"Invalid Data",
                            "Error": error 
                           });
                         
   } 
  res.end();
}


export const deleteCategory = async (req,res) => {
  try{
    const { id: categoryID } = req.params;
    const category = await Category.findOneAndDelete({ _id: categoryID });
    if (!category) {
      res.status(404).json({ Error: "Category Not Found!" });
    }
    res.status(200).json({ category }); 
  }
 
    catch(error){
      res.status(500).json({
                              "Message":"Invalid Data, This Id isn't existed",
                              "Error": error 
                            });
     }
     res.end();
}


