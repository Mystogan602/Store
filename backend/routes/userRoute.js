import express from "express";
import {
  createUser,
  loginUser,
  logoutUser,
  getAllUsers,
  getCurrentUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").post(createUser).get(protect, admin, getAllUsers);

router.post("/login", loginUser);
router.post("/logout", logoutUser);

router.route("/profile").get(protect, getCurrentUserProfile).put(protect, updateUserProfile);

export default router;
