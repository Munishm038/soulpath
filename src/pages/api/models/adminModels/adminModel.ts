const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    Name : {
       type : String,
      //  required : [ true, "The Name is required..."],
      //  trim : true,
      //   maxlength : [ 40, "Name can't be greater then 40 characters"]
    },
    Username : {
       type : String,
       unique: true
    },
    Password : {
       type : String
    },
    Status : {
       type : Number,
      //  default : '1',
    },
}, 
{ 
    timestamps : true,
    versionKey : false,
}
)

export default mongoose.models.AdminData || mongoose.model("AdminData", userSchema)