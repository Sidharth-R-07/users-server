import { users } from "../data/users.js";

export const getAllUsers = (req, res) => {
  try {
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};

export const addUser = (req, res) => {
  try {
    const { name, age } = req.body;
    const newUser = { id: Date.now().toString(), name, age };
    users.push(newUser);
    return res
      .status(201)
      .json({ message: "User added successfully", user: newUser });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const getUserById = (req, res) => {
  try {
    const { id } = req.params;
    const user = users.find((u) => u.id === id);
    if (!user) {
      return res.status(404).json({ message: "User not` found" });
    }
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const updateUser = (req, res) => {
  try {
    const { id } = req.params;
    const { name, age } = req.body;
    const userIndex = users.findIndex((u) => u.id === id);

    users[userIndex] = { name, age };
    return res
      .status(200)
      .json({ message: "User updated successfully", user: users[userIndex] });
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};

export const deleteUser = (req, res) => {
  try {
    const { id } = req.params;
    const userIndex = users.findIndex((u) => u.id === id);
    users.splice(userIndex, 1);
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};
