import mongoose from "mongoose";
const jobSchema=new mongoose.Schema({
    company:{
        type:String,
        required:true
    },
    position:{
        type:String,
        required:true,
    },
    worklocation:{
        type:String,
        default:"Hyderabad",
        required:true
    }

},
{timestamps:true}
)
export default mongoose.model('Job',jobSchema)