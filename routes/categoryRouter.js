import express from "express";
import { verifyToken } from "../middleware/userAuthentication.js";
import { getCategories,getCategory,createCategory,updateCategory,deleteCategory } from "../controllers/categoryController.js";

const router = express.Router();

router.get('/getCategories', verifyToken, getCategories);
router.get('/getCategory/:id',verifyToken, getCategory);
router.post('/createCategory',verifyToken, createCategory);
router.put('/updateCategory/:id',verifyToken, updateCategory);
router.delete('/deleteCategory/:id',verifyToken, deleteCategory);

export {router};