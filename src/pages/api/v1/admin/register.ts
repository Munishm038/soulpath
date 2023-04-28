import type { NextApiRequest, NextApiResponse } from 'next'

// import ProductModel from '../../models/ProductModel'
import adminModel from '../../models/adminModel'

const connectDb = require('../../database/mongoose')
connectDb()

type Data = {
   
}

export default async function handler(   
  req: NextApiRequest,
  res: NextApiResponse<Data> ){

  if(req.method === 'GET') {
        const { Name, Username, Password, Status }  = req.body
       console.log("Fields", Name, Username, Password, Status)

    const _data = new adminModel({ Name, Username, Password, Status })
    
    try{
            await _data.save()
            res.json({ data : _data })
              
        }  catch(error){
            console.log("Error", error)
        }
    }
   else if(req.method === 'POST') {
    try {
         const { Username, Password } = req.body
           console.log("Username, Password", Username, Password)
        const users = await adminModel.find({ Username:Username, Password:Password })
          res.json({ data : users })
     } catch(error) {
        console.log("Error", error)
     }
   }
  else if(req.method === 'PUT') {

    const { Name, Username, Password, Status, ID } = req.body
       console.log("Fields", Name, Username, Password, Status, ID )
      try {
         const _update = await adminModel.updateOne({ _id:ID }, {
                $set : {
                    Name: Name,
                    Username: Username,
                    Password: Password,
                    Status: Status
                }
         })
         res.json({ data: _update })
      }  catch(error) {
        console.log("Error", error)
      }
  }
//   else if( req.method === 'DELETE' ){
//     try {
    //   const { ID } = req.body
//         console.log("ID", ID)
//         const _data = await adminModel.deleteOne({ _id : ID })
//           res.json({ data : _data })
//     }
//      catch(error){
//         console.log("Error", error)
//      }
    
//    }

}