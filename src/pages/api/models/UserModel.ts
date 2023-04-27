const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
     name: {
        type : String,
      //   required : true
     },
     email: {
        type : String
     },
     phone: {
        type : Number
     }
})

export default mongoose.models.User || mongoose.model("User", userSchema)
