import type { NextApiRequest, NextApiResponse } from 'next'
import house from '../../../models/adminModels/houseModel'

const connectDb = require('../../../database/mongoose')
connectDb()

type Data = { }

export default async function handler(   
  req: NextApiRequest,
  res: NextApiResponse<Data> ){

    if(req.method === 'GET') {

      let _data = await house.find() 
    
    if(!_data) {
           return res.json({ Status : false, message : 'Record Not Found...' })
      }  
    else {
            return res.json({  Status : true, data : _data })
        }   
  }

//    else if(req.method === 'POST') {

//    const postData = req.body

//    if( !postData){
//     return res.json({ Status : false, message : "please fill some fields..." }) 
//    }
//   else {
//       let _user = await house.insertMany(postData)

//     if(!_user)
//      {
//          return res.json({ Status : false, message : "Data not submitted in Database..." })
//      }
//     else {
//           return res.json({ Status : true, message : "Data submitted..." })
//        }
//    }
// }
  
}