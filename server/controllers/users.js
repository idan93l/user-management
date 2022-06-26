import UserModel from "../model/users.js"

export const getUsers = async (req, res) => {
  try {
    const usersData = await UserModel.find();
    res.status(200).send(usersData);
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
}

// export const updateUser = (req, res) => {
//   res.send("update user")
// }