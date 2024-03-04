const mongoose = require('mongoose');
const {db_link} = require("../secrets")

mongoose
.connect(db_link)
.then(()=>{
    console.log('user model connected')
})
.catch((err)=>{
    console.log(err);
}) 


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
      },
      email:{
        type:String,
        required:true,
        unique:true,
        // validate:function(){
        //   return emailValidator.validate(this.email);
        // }
      },
      age:{
        type:Number
      },
      password:{
        type:String,
        required:true,
        minLength:8
      },
      confirmPassword:{
        type:String,
        required:true,
        minLength:8,
        validate:function(){
          return this.confirmPassword==this.password
        }
      }
})


const user = mongoose.model('user',userSchema);
module.exports = user;