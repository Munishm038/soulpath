const mongoose = require('mongoose')
import { Schema } from "mongoose"

const sunSingCharSchema = mongoose.Schema({  

    SignsID : { type : Schema.Types.ObjectId, ref: 'sunsigns' }, 
    Traits : { type : String },
    Description : { type : String }
}, 
{ 
    timestamps : true,
    versionKey : false,
})

export default mongoose.models.sunsing_chars || mongoose.model("sunsing_chars", sunSingCharSchema )
