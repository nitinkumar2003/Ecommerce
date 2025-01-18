import  jwt from "jsonwebtoken";
const createActivattionToken=(user)=>{
const token=jwt.sign(user,process.env.SECRET_KEY,{
    expiresIn:'5m'
})
return token;
}

export default createActivattionToken;