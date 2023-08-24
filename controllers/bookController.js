
import { object, string, number} from 'yup';
import { validateProduct } from '../middleware/bookValidation.js';
import { Books } from '../model/book.js';
import { Category } from '../model/category.js';

// Validating using yup
  let userSchema = object({
    title: string().required(),
    price: number().required().positive(),
    description: string().required(),
    category_id: string().required(),
  });


//Get All Books
export const getBooks = async (req,res) => {
  const books = await Books.find({});
  res.status(200).json({ books });
}

//Get Book By Id
export const getBook = async (req,res) => {
  const { id: bookID } = req.params;
  const book = await Books.findOne({ _id: bookID });
  if (!book) {
    res.status(404).json({ Error: "Book Not Found!" });
  }

  res.status(200).json({ book });  
}


//============== Create new Book ===================
export const createBook= async(req,res) => {
  try{
    const {title, price,description,category} = req.body;
    const errors = validateProduct(title,price,description,category);
    if(errors.length > 0){
      res.status(401).json(errors);
    }

    let valid = userSchema.validateSync(body,{
        strict:true
      });
       
     if(valid){
            let newBook = {
                title,
                price,
                description,
                category,
            } 
          // Creating New Book
            const book = await Books.create(newBook);
            res.status(201).json({ book });
          }
       
      }
      catch(error){
      res.status(401).json({
                              "Message":"Invalid Data",
                              "Error": error 
                            });
     }                          
      res.end();
   }

//======================= Updating a Book =================
export const updateBook = async (req,res) => {
      const {title,price,description,category} = req.body;
    //Validating using user-defined function "validateProduct" and "userSchema" NPM package
      let errors = [];
      errors = validateProduct(title,price,description,category);
      if(errors.length > 0){
        res.status(401).json(errors);
      }

      let valid = userSchema.validateSync(req.body,{
          strict:true
        });
   
      if(valid){  
     // Updating the book
        const { id: bookID } = req.params;
        const book = await Books.findOneAndUpdate({ _id: bookID }, req.body, {
          new: true,
          runValidators: true,
        });

        if (!book) {
          res.status(404).json({ Error: "Product Not Found!" });
        }

        res.status(200).json({ book });
      }
    
       res.end();
}

//================ Deleting a Book =======================
export const deleteBook =async (req,res) => {
  try{
    const { id: bookID } = req.params;
    const book = await Books.findOneAndDelete({ _id: bookID });
    if (!book) {
      res.status(404).json({ Error: "Book Not Found!" });
    }
    res.status(200).json({ book });
  
  }
 
    catch(error){
      res.status(500).json({
                              "Message":"Invalid Data, This Id isn't existed",
                              "Error": error 
                            });
     }
     res.end();
}


