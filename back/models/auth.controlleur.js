const UserModel = require("../models/user.model");
const ObjectId = require("mongoose").Types.ObjectId; //reconnaitre les id

module.exports.signup = async(req, res)=>{
  console.log(req.body);
  const{pseudo, email, password}= req.body

  try{
    const user =await UserModel.create({pseudo, email, password});
   res.status(201).json({user: user.id});
  }
  catch(err){
res.status(200).send({err})
  }
}


