import { getBooks,getBook,createBook, updateBook,deleteBook} from "../controllers/bookController.js";
import { verifyToken } from "../middleware/userAuthentication.js";
import express from "express";

const router = express.Router();


router.get('/getBooks', verifyToken,getBooks);
router.get('/getBook/:id',verifyToken,getBook);
router.post('/createBook',verifyToken,createBook);
router.put('/updateBook/:id',verifyToken,updateBook);
router.delete('/deleteBook/:id',verifyToken,deleteBook);

export {router};