
import connect_DB from "./db/index.js";
import dotenv from "dotenv";
console.log("ye chalu hai")

// import express from "express";

// const app = express();

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error", (error) => {
//             console.log("Not able to talk to database: ", error);
//             throw error;
//         });
//         app.listen(process.env.PORT, () => {
//             console.log(`APP is listening on port ${process.env.PORT}`);
//         });
//     } catch (error) {
//         console.error("ERROR: ", error);
//     }
// })();

dotenv.config({
    path: './.env'
})


connect_DB() 