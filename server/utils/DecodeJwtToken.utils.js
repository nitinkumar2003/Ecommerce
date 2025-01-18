import jwt from 'jsonwebtoken';
const DecodeJwtToken=(token)=>{
try{
    const user=jwt.verify(token,process.env.SECRET_KEY);
    return user;
}catch(err){
    console.log('err')
}
}
export default DecodeJwtToken;