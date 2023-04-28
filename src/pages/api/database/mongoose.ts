const mongoose = require('mongoose');

async function connectDb(){
    try{
        const MONGO_URI = "mongodb://127.0.0.1:27017/soulpath"
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


