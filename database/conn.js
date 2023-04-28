import mongoose from "mongoose";

async function connectDB(){
    try{
        const conn=await mongoose.connect(process.env.mongodb_url).then(()=>{
            console.log("successfully connected to mongodb")
        })
    }catch(error){
        console.log(`error ${error}`)
    }
}
export default connectDB