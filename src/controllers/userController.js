const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  let user = req.body;
  let createdUser = await userModel.create(user);
  res.send({ msg: createdUser });
};

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });

    //Create Token
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "plutonium",
      organisation: "FunctionUp",
    },
    "jit-860-yad-799-end-211-av-9759-ra-7009-371"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, token: token });
};

const getUserData = async function (req, res) {
  res.send({ status: true, data: req.userDetails });
};

const updateUser = async function (req, res) {
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: req.userId }, userData, { new: true });
  res.send({ status: updatedUser });
}

const deleteUser = async function (req, res) {
  let userData = req.body;
  let deleteUser = await userModel.findOneAndUpdate({ _id: req.userId }, userData, { new: true });
  res.send({ status: deleteUser });
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser
