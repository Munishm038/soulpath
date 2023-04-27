const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
     name: {
        type : String,
      //   required : true
     },
     brand: {
        type : String
     },
     price: {
        type : Number
     },
     category: {
        type : String
     } 
})

export default mongoose.models.products || mongoose.model("products", userSchema)
