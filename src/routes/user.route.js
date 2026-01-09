import {
  getAllUsers,
  addUser,
  deleteUser,
  getUserById,
  updateUser,
} from "../controller/user.controller.js";

import express from "express";

const router = express.Router();

router.get("/", getAllUsers);

router.post("/", addUser);

router.get("/:id", getUserById);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;
