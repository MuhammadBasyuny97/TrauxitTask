import { getBooks,getBook,createBook, updateBook,deleteBook} from "../controllers/bookController.js";
import { verifyToken } from "../middleware/userAuthentication.js";
import express from "express";
import { checkRoles } from "../middleware/userAuthorization.js";


const router = express.Router();


router.get('/getBooks', verifyToken,checkRoles("book.list"),getBooks);
router.get('/getBook/:id',verifyToken,checkRoles("book.get"), getBook);
router.post('/createBook',verifyToken,checkRoles("book.create"),createBook);
router.put('/updateBook/:id',verifyToken,checkRoles("book.update"),updateBook);
router.delete('/deleteBook/:id',verifyToken,checkRoles("book.delete"),deleteBook);

export {router};