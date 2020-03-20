const mongoose = require("mongoose");
const { UserModel } = require("../model/model");
const path = require("path");

const getAllUsers = async (request, response) => {
  try {
    console.log("GET USERS");
    var userInstances = await UserModel.find({});
    response.json(userInstances);
    // var usersMap = {};
    // userInstances.map(user => {
    //   usersMap[user.id] = user;
    // });
    // // console.log(usersMap);
    // response.send(usersMap);
  } catch (error) {
    response.status(500).send(error);
  }
};

const getHome = async (request, response) => {
  response.sendFile(path.join(__dirname, "../views/index1.html"));
};

const getHome2 = async (request, response) => {
  response.sendFile(path.join(__dirname, "../views/index2.html"));

  // const getdeletePage = async (request, response) => {
  //   response.sendFile(path.join(__dirname, "../views/deletePage.html"));
  // };
};

const postUser = async (request, response) => {
  try {
    console.log("POST USER");
    var userInstance = new UserModel(request.body);
    //console.log(userInstance);
    const created = await UserModel.create(userInstance);
    response.send(created);
  } catch (error) {
    console.log(error);
    response.status(500).send(error);
  }
};

// const putUser = async (request, response) => {
//   try {
//     console.log("PUT USER");
//     var userInstance = await UserModel.findOneAndUpdate(
//       { username: request.body.username },
//       { password: request.body.password }
//     );
//     // console.log(userInstance);
//     response.send(userInstance);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// };

const putUser = async (request, response) => {
  try {
    console.log("PUT USER");
    var userInstance = await UserModel.findOneAndUpdate(
      request.query,
      request.body
    );
    // console.log(userInstance);
    response.send(userInstance);
  } catch (error) {
    response.status(500).send(error);
  }
};

const getUser = async (request, response) => {
  try {
    console.log("GET USER");
    var userInstance = await UserModel.find(request.body);
    //console.log(userInstance);
    response.send(userInstance);
  } catch (error) {
    response.status(500).send(error);
  }
};

const deleteUser = async (request, response) => {
  try {
    console.log("Delete USER");
    var userInstance = await UserModel.deleteOne(request.query);
    //console.log(userInstance);
    //response.send(userInstance);
    response.redirect("/");
  } catch (error) {
    response.status(500).send(error);
  }
};

module.exports = {
  getAllUsers,
  postUser,
  putUser,
  getUser,
  deleteUser,
  getHome,
  getHome2
  //getdeletePage
};
