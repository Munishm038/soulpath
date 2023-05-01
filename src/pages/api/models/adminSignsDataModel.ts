const mongoose = require('mongoose')
import { Schema } from "mongoose"

const signsDataSchema = mongoose.Schema({  

    SignsID : { type : Schema.Types.ObjectId, ref: 'addsigns' }, 
    Sunsign_Char : {
        type : String
    },
    Description : {
        type : String
    }
}, 
{ 
    timestamps : true,
    versionKey : false,
})

export default mongoose.models.singsdata || mongoose.model("singsdata", signsDataSchema)
