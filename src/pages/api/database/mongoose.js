const mongoose = require("mongoose")

async function connectDb(){
    try{
        const MONGO_URI = "mongodb://127.0.0.1:27017/e-com"
        await mongoose.connect(MONGO_URI, {
            useUnifiedTopology : true,
            useNewUrlParser: true
        })
        console.log("Connected to Mongodb localhost")
    } catch(error){
        console.log("Error", error)
    }
}

module.exports = connectDb;



// const mongoose = require('mongoose')
  
// mongoose.connect("mongodb://127.0.0.1:27017/e-com")

// const { MongoClient } = require("mongodb");

// const url = "mongodb://127.0.0.1:27017";
// const client = new MongoClient(url);
// const database = "e-com";

// async function dbConnect() {
  
//         await client.connect();
//    let db = client.db(database);
//    return db.collection("products");
// }

// // module.exports = dbConnect;

// export default dbConnect;

