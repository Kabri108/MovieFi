import mongoose from "mongoose";

const UserSchema=mongoose.Schema({
    fullName:{
        type:String,
        required:[true,"Please add a full name"]
    },
    email:{
        type:String,
        required:[true,"Please add an email"],
        unique:true,
        trim:true,
    },
    password:{
        type:String,
        required:[true,"Please add a password"],
        minlength:[6,"Password must be at least 6 charecters"]

    },
    image:{
        type:String,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    likedMovies:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Movies"
    }],
},{ timestamps:true,})

const UserModel=mongoose.model("User",UserSchema);

export default UserModel;