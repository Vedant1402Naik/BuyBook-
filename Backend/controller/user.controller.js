import User from "../model/user.model.js"
import bcryptjs from "bcryptjs"

export const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" })
        }

        const hashPassword = await bcryptjs.hash(password, 10);
        const createUser = new User({
            username: username,
            email: email,
            password: hashPassword,
        })
        await createUser.save()
        res.status(201).json({
            message: "User created successfully", user: {
                _id: createUser._id,
                username: createUser.username,
                email: createUser.email,
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}


export const login = async (req,res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        const isMatch = await bcryptjs.compare(password, user.password)
        if (!user || !isMatch) {
            return res.status(400).json({ message: "Invalid username or password" })
        } else {
            res.status(200).json({
                message: "Login Successfully ", user: {
                    _id: user._id,
                    username: user.username,
                    email: user.email
                }
            })
        }
    } catch (error) {
        console.log("Error ", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}



