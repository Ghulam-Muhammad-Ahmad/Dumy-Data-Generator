import mongoose from 'mongoose';

const employSchema = mongoose.Schema({
    name:String,
    salary:Number,
    lanuage:String,
    city:String,
    date: { type: Date, default: Date.now },
})
export const Employee = mongoose.model("Employee",employSchema);