import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String
    },
    Name : {
        type : String,
        required : true
    },
    completed : {
        type : Boolean,
        default : false
    }
})
export const todo = mongoose.model('todo', todoSchema);