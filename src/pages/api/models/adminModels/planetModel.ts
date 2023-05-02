import { model } from "mongoose"

const mongoose = require('mongoose')

const planetSchema = mongoose.Schema({  
        
      Name : { type : String },
      H_Name : { type : String }
},
{
    timestamps : true,
    versionKey : false,
})

export default mongoose.models.planets || mongoose.model("planets", planetSchema)