import type { NextApiRequest, NextApiResponse } from 'next'
import adminSignsDataModel from '../../../models/adminSignsDataModel'

// const connectDb = require('../../../database/mongoose')
// connectDb()

type Data = {
   
}

export default async function handler(   
  req: NextApiRequest,
  res: NextApiResponse<Data> ){

      // POST Data
    if(req.method === 'GET') {

      let _data = await adminSignsDataModel.find() 
    
    if(_data) {
           return res.status(200).json({ data : _data })
      }  else {
            return res.json({  Status : false,  
                              message : "Record Not Inserted"
                           })
        }  
  }

   else if(req.method === 'POST') {

   const { SignsID, Sunsign_Char, Description } = req.body

      let _user = await adminSignsDataModel.create({ SignsID, Sunsign_Char, Description })
       if(!_user){
           return res.json({ Status : false, message : "Data not insert" })
       }
      else {
          return res.json({ Status : true, message : "Data submitted", Data : _user })
      }
   }

   else if(req.method === 'PUT') {
        
     const { ID } = req.body

     console.log("REQ", req.body )

       let _update = await adminSignsDataModel.updateOne({ _id : ID }, {
        $set : req.body  })

       if(!_update){
              return res.json({ status : false, message : " Data Not Updated..." })
       }
      else{
            return res.json({ status : true, message : "Data Updated...", data : _update })
      }
   }
}

