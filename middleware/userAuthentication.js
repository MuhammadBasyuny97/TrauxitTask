
import jwt from 'jsonwebtoken';


export const verifyToken =(req,res,next) => {
    console.log("Authorization", req.headers);

    let [_,token] = req.headers.authorization.split(" ");
    //console.log("Authorization", req.headers);
    console.log("Token", token);
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded;
    console.log(req.user);
    console.log("decoded", process.env.JWT_SECRET_KEY);
   
    next();
}

 