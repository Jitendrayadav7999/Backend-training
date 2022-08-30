const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try {
    let user = req.body;
    if (Object.keys(user).length != 0) {
      let createdUser = await userModel.create(user);
      res.status(201).send({ msg: createdUser });
    } else {
      res.status(400).send({ msg: "BAD REQUEST" })
    }
  } catch (error) {
    res.status(500).send({ msg: "Error", error: error.message })
  }


};

const loginUser = async function (req, res) {
  try {
    let userDetail = req.body
    if (Object.keys(userDetail).length != 0) {
      let user = await userModel.findOne({ emailId: userDetail.emailId, password: userDetail.password });
      if (user) {
        let token = jwt.sign(
          {
            userId: user._id.toString(),
            batch: "plutonium",
            organisation: "FunctionUp",
          },
          "jit-860-yad-799-end-211-av-9759-ra-7009-371"
        );
        res.setHeader("x-auth-token", token);
        res.status(201).send({ status: true, token: token });
      } else {
        return res.status(403).send({
          status: false,
          msg: "username or the password is not corerct",
        });
      }
    } else {
      res.status(400).send({ msg: "BAD REQUEST" })
    }
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
};

const getUserData = async function (req, res) {
  try {
    let userDetails = await userModel.findById(req.userId);
    if (userDetails) {
      res.status(200).send({ status: true, data: userDetails });
    } else {
      return res.status(403).send({ status: false, msg: "No such user exists" })
    }
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
};

const updateUser = async function (req, res) {
  try {
    let userData = req.body;
    if (Object.keys(userData).length != 0) {
      let updatedUser = await userModel.findOneAndUpdate({ _id: req.userId }, userData, { new: true });
      res.status(201).send({ status: updatedUser });
    } else {
      res.status(400).send({ msg: "BAD REQUEST" })
    }
  } catch (error) {
    res.status(500).send({ error: error.message })
  }


}

const deleteUser = async function (req, res) {
  try {
    let userData = req.body;
    if (Object.keys(userData).length != 0) {
      let deleteUser = await userModel.findOneAndUpdate({ _id: req.userId }, userData, { new: true });
      res.status(201).send({ status: deleteUser });
    } else {
      res.status(400).send({ msg: "BAD REQUEST" })
    }
  } catch (error) {
    res.status(500).send({ error: error.message })
  }


}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser
