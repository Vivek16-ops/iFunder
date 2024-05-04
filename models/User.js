import mongoose from "mongoose";

const Userscemas = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
    },
    username: {
        type: String,
        required: true
    },
    profilepic: {
        type: String,
    },
    coverpic: {
        type: String,
    },
}, { timestamps: true })

const UserModel = mongoose.models.Users || mongoose.model("Users", Userscemas);

export default UserModel;