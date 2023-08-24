
//import <>crtpr
import validator from 'validator';
import { uid } from 'uid';
import  jwt  from 'jsonwebtoken';
import {createHash} from "crypto";
import {validateLogin, validateRegister} from '../middleware/userValidation.js';
import { Users } from '../model/user.js';


export const userRegister = async (req,res) => {

        const user = req.body;
        const {fullName,email,password} = user;
   
       const errors =  validateRegister(email,password);
        if(errors.length > 0) {
         res.status(400).json({
             error: {
                 errorMessage: errors
             }
         })
        }

        const checkUser = await Users.findOne({ email: req.body.email})
        if(checkUser){
            res.status(400).json({
                error:{
                    errorMessage: ['Your Email already existed']
                }
            })
        }      
            const hashedPassword = createHash('sha256').update(password,'utf-8').digest('base64');
              user.password = hashedPassword
               usersData.push(user);
                const token = jwt.sign(user, process.env.JWT_SECRET_KEY, {expiresIn: "1h"});
                console.log(token);
                console.log('Registration Complete Successfully');

              res.status(201).cookie('authToken',token).json({
                success : 'true',
            })
         
}


export const userLogin = async (req,res) => {
    const user = req.body;
    console.log(user);
    const {email ,password, passwordRepeat} = user;

     const errors = validateLogin(email,password,passwordRepeat);
    
       if(errors.length > 0) {
        res.status(400).json({
            error: {
                errorMessage: errors
            }
        })
       }
       
            const checkUser = await { email: req.body.email}
             if(checkUser){
                const hashedPassword = createHash('sha256').update(password,'utf-8').digest('base64');
                if(hashedPassword === checkUser.password){  
                    const token = jwt.sign({
                        checkUser
                    }, process.env. JWT_SECRET_KEY, {expiresIn: "1h"});
                    console.log(token);
                    console.log('Login Complete Successfully');

                  res.status(200).cookie('authToken',token).json({
                     email: email, password: hashedPassword,token: token
                     })
                }else {
                          res.status(400).json({
                            error:{
                                errorMessage: ["The Password is not Valid"]
                            }
                          })
                }
             } else {
                res.status(400).json({
                  error:{
                      errorMessage: ["The Email is not Found"]
                  }
                })
      }
          
      
       }


export const userLogout = (req,res) => {
    res.status(200).cookie('authToken', '').json({
         success : true
    })
}