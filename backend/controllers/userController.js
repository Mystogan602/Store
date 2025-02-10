import User from "../models/userModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";

const createUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are required");
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }

    try {
        // const user = new User({ username, email, password });
        // await user.save();
        const user = await User.create({ username, email, password });
        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            isAdmin: user.isAdmin,
        });

    } catch (error) {
        console.log(error);
        res.status(500);
        throw new Error("Failed to create user");
    }

});

export { createUser };
