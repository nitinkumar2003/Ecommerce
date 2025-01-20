import Joi from 'joi';

export const userRegisterSchema=Joi.object({
    name:Joi.string().min(3).max(30).required(),
    email:Joi.string().email().required(),
    password:Joi.string().regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@$!%*?&])[A-Za-z\d#@$!%*?&]{8,15}$/,
        "password"
      )
      .required(),
    confirm_password:Joi.string().required().valid(Joi.ref("password")),

}).unknown(false)

export const userLoginSchema=Joi.object({
  email:Joi.string().email().required(),
  password:Joi.string().regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@$!%*?&])[A-Za-z\d#@$!%*?&]{8,15}$/,
    "password"
  ).required()
}).unknown(false)
