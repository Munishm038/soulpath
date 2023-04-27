
// import nc from "next-connect"
// import ProductModel from "../../models/ProductModel"

// const connectDb = require('../../database/mongoose')
// connectDb()

// const handler = nc()

// // Model ProductModel

//  // Get Data API
// .get(async(req,res) => {
//    try {
//       const users = await ProductModel.find({ name:'techno 11' })
//       res.send(users)
//    } catch(error) {
//       console.log("Error", error)
//    }
// })


//  // Post Data API
// .post( async(req,res) => {
    
//   const { name, brand, price, category } = req.body

//     const newUser = new ProductModel({ name, brand, price, category })
//       try{
//           await newUser.save()
//          res.send("New User Created")
        
//       }  catch(error){
//            console.log("Error", error)
//       }
// })


// .put( async(req,res) => {

//   try{
//      let _data = await ProductModel.updateOne({  name:req.params }, {
//                           $set :  { name: req.body } 
//                   })
//         res.send(_data)
//   }
//    catch(error){
//          console.log("Error", error)
//      }
// })

// export default handler

