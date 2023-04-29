import type { NextApiRequest, NextApiResponse } from 'next'
import adminModel from '../../models/adminModel'

const connectDb = require('../../database/mongoose')
connectDb()

type Data = {
   
}

export default async function handler(   
  req: NextApiRequest,
  res: NextApiResponse<Data> ){

    // const {  body, query: { ID } } = req;

    if( req.method === 'GET' ){
    
    const { ID } = req.query
         console.log("ID", ID )
      const _data = await adminModel.findById(ID)
      
      if(!_data) {
        return res.json({ status : false, message:'Record Not Find' })
      }
      else{
        return res.json({ status : true, message:'Record Find Successfully', data : _data })
     }
    
   }
 else if( req.method === 'DELETE' ) {
   
    const { ID } = req.query
          console.log(ID)
       const _data = await adminModel.findByIdAndDelete(ID)
       if(!_data) {
        return res.json({ status : false, message:'Record Not deletd' })
      }
      else {
          console.log("Data", _data)
        return res.json({ status : true, message:'Record deletd Successfully', data : _data })
     }
 }

}

