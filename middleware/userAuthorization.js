

export const checkRoles = (role) => (req,res,next) => {
  if(!req.user){
    res.status(401).json({
        status:"Error",
        message: "Unauthenticated"
    })
  }
  if(!req.user.checkUser.role.includes(role)){
    res.status(401).json({
        status: "Error",
        message: "Unauthorized"
    })
  }
  next();
}