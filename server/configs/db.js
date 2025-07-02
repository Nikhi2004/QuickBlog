import mongoose, { connect }  from "mongoose";




const connectDB = async ()=>{
    try{
        mongoose.connection.on('connected',()=>console.log("Database Connected")
    )
      await mongoose.connect(`${process.env.MONGODB_URI}/quickblog`)
    }catch(errror){
     console.log(errror.message);
    }
}


export default connectDB;