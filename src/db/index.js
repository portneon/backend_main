import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connect_DB = async () => {
    try {
        const connectioninstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n  mongoDB connected !! DB HOST : ${connectioninstance.connection.host}`)
        // console.log(connectioninstance)
    } catch(error) {
        console.log("mongodb connection failed : ", error)
        process.exit(1)

        
    }


}
export default connect_DB