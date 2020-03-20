const {
  getAllUsers,
  postUser,
  putUser,
  getUser,
  deleteUser,
  getHome,
  getHome2
  // getdeletePage
} = require("../controller/controller");

const routes = app => {
  app.route("/users").get(getAllUsers);
  app.route("/").get(getHome);
  app.route("/home2").get(getHome2);
  //app.route("/deletePage").get(deleteUser);

  app
    .route("/user")
    .post(postUser)
    .put(putUser)
    .get(getUser)
    .delete(deleteUser);

  //app.route("/addPage"), app.get(getupdatePage);
};

module.exports = { routes };
