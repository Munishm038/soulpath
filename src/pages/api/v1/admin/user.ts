import nc from "next-connect"
import UserModel from "../../models/UserModel"

const connectDb = require('../../database/mongoose')
connectDb()

const handler = nc()

// Model UserModel

//  Post Data API
.post( async(req,res) => {
    const { name, email, phone } = req.body
      console.log("Fields", name, email, phone)
    const newUser = new UserModel({ name, email, phone })
      try{
          await newUser.save()
         res.send("New User Created")
        
      }  catch(error){
           console.log("Error", error)
      }
})

 // Get Data API
.get(async(req,res) => {
  try {
     const users = await UserModel.find({})
     res.send(users)
  } catch(error) {
     console.log("Error", error)
  }
})

export default handler

