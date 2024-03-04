const express = require("express");
const userModel = require("../Models/userModel");

//sign up user
module.exports.signup = async function signup(req, res) {
  try {
    let dataObj = req.body;
    console.log(dataObj);
    let user = await userModel.create(dataObj);
    // sendMail("signup",user);
    if (user) {
      return res.json({
        message: "user signed up",
        data: user,
      });
    } else {
      res.json({
        message: "error while signing up",
      });
    }
    // console.log('backend',user);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
}; 

module.exports.getAllUser = async function getAllUser(req, res) {
  try {
    let users = await userModel.find();
    if (users) {
      console.log(users);
      res.json({
        message: 'users retrieved',
        data: users
      });
    }
  }
  catch (err) {
    res.json({ message: err.message })
  }
};


//login user

// module.exports.login = async function login(req, res) {
//   try {
//     let data = req.body;
//     if (data.email) {
//       let user = await userModel.findOne({ email: data.email });
//       if (user) {
//         //bcrypt -> compare
//         if (user.password == data.password) {
//           console.log("logged in", user)
//           return res.json({
//             message: "User has logged in",
//             data: user, // userDetails:data,
//           });
//         } else {
//           return res.json({
//             message: "wrong credentials",
//           });
//         }
//       } else {
//         return res.json({
//           message: "User not found in db",
//         });
//       }
//     } else {
//       return res.json({
//         message: "Empty field found",
//       });
//     }
//   } catch (err) {
//     return res.status(500).json({
//       message: err.message,
//     });
//   }
// };

module.exports.getUser = async function getUser(req, res) {
  // console.log('getUser called');
  try {
    let id = req.params.id;
    let user = await userModel.findOne({ _id: id });
    
    if (user) {
      console.log(user)
      res.json({
        message: 'user retrieved',
        data: user
      });
    }
  }
  catch {
    res.json({
      message: "user not found",
    }); 
  }
};

module.exports.deleteUser = async function deleteUser(req, res) {
  // users = {};
  try {
    let id = req.params.id;
    let user = await userModel.findByIdAndDelete(id);
    if (!user) {
      res.json({
        message: 'user not found'
      })
    }
    res.json({
      message: "data has been deleted",
      data: user,
    });
  }
  catch (err) {
    res.json({
      message: err.message
    });
  }
};


module.exports.updateUser = async function updateUser(req, res) {
  // console.log("req.body-> ", req.body);
  //update data in users obj
  try {
    let id = req.params.id;
    let updateuser = await userModel.findByIdAndUpdate(id,req.body,{new:true});

    if (updateUser) {
      res.json({
        message: "data updated successfully",
        data: updateuser,
      });
    } else {
      res.json({
        message: "user not found",
      });
    }
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
};