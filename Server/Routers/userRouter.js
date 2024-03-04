const express = require("express");
const userRouter = express.Router();

const {signup, getAllUser, login, deleteUser, getUser, updateUser} = require('../Controller/userController')

userRouter
.route('/signup')
.post(signup)

userRouter
.route('/getAllUsers')
.get(getAllUser)

// userRouter
// .route('/login')
// .post(login) 

userRouter
.route('/:id')
.patch(updateUser)
.delete(deleteUser)
.get(getUser)
module.exports=userRouter;
