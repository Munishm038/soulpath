import { Schema } from "mongoose"

const mongoose = require('mongoose')

const signsSchema = mongoose.Schema({
     Name : {
            type : String
        },
     Date : {
           type : String
        }
})

export default mongoose.models.addsigns || mongoose.model("addsigns", signsSchema )