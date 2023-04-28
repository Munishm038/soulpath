const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    Name : {
       type : String,
       required : true
    },
    Username : {
       type : String
    },
    Password : {
       type : String,
       required : true
    },
    Status : {
       type : String
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