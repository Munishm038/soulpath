const mongoose = require('mongoose')

const houseSchema = mongoose.Schema({ 
             Name : { type : String },
             Description : { type : String }
 },
 {
    timestamps : true,
    versionKey : false
 }) 

export default mongoose.models.houses || mongoose.model("houses", houseSchema)