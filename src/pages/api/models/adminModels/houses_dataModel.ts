import { Schema } from "mongoose"

const mongoose = require('mongoose')

const housesSchema = mongoose.Schema({
     
       HouseID : { type : Schema.Types.ObjectId, ref: 'houses' },
       PlanetID : { type : Schema.Types.ObjectId, ref: 'planets' },
       Characteristics : { type : String },
       Description : { type : String }
}, 
{
    timestamps : true,
})

export default mongoose.models.houses_data || mongoose.model("houses_data", housesSchema)