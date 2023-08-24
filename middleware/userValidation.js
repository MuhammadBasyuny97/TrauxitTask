
import validator from 'validator';

const validate = (email,password) => {
    let errors = [];
    if(!email){
        errors.push('Please provide your email')
       }
     if(!password){
        errors.push('Please provide your password')
       }
     if(email && !validator.isEmail(email)){
        errors.push('Please provide your Valid Email')
       }
       if(password && !validator.isStrongPassword(password)){
        errors.push('Password: must be 8 characters with at least 1 capital and 1 small and 1 special character ')
       }
       return errors;
}

export const validateRegister = (email,password) => {
  return validate(email,password)
    
}

export const validateLogin = (email,password, passwordRepeat) => {
     let errors = validate(email,password);
     if(password !== passwordRepeat){
        errors.push('Incorrect Password: Password must match passwordRepeat')
       }
     return errors;
     
 }