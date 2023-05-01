import type { NextApiRequest, NextApiResponse } from 'next'
import adminSignsModel from '../../../models/adminSignsModel'

// const connectDb = require('../../database/mongoose')
// connectDb()

type Data = {
   
}

export default async function handler(   
  req: NextApiRequest,
  res: NextApiResponse<Data> ){

      // POST Data
    if(req.method === 'GET') {

      let _data = await adminSignsModel.find() 
    
    if(!_data) {
           return res.status(200).json({ data : _data })
      }  else {
            return res.json({  Status : false,  
                               data : _data
                           })
          }
     
  }
   else if(req.method === 'POST') {

   const { Name , Date } = req.body

      let _user = await adminSignsModel.insertMany({ Name : Name, Date : Date })
       
      if(!_user)
       {
           return res.json({ Status : false, message : "Data not insert" })
       }
      else {
          return res.json({ Status : true, message : "Data submitted", Data : _user })
      }
    }

}