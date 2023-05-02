const mongoose = require('mongoose')

const sunSignsSchema = mongoose.Schema({
     Name : { type : String },
     Date : { type : String }
}, 
{ 
    timestamps : true,
    versionKey : false,
})

export default mongoose.models.sunsigns || mongoose.model("sunsigns", sunSignsSchema )