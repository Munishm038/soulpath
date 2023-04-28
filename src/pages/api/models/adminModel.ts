const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    Name : {
       type : String
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
    }
}
// , { 
//     timestamps: {
//       createdAt: 'created_at',
//       updatedAt: 'updated_at'
//     }
// }
)

export default mongoose.models.AdminData || mongoose.model("AdminData", userSchema)