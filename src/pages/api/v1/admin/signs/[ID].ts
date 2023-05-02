import type { NextApiRequest, NextApiResponse } from 'next'
import sunSignsChar from '../../../models/adminModels/sunSignsCharModel'

const connectDb = require('../../../database/mongoose')
connectDb()

type Data = { }

export default async function handler(   
  req: NextApiRequest,
  res: NextApiResponse<Data> ){

 if( req.method === 'DELETE' ) {
   
    const { ID } = req.query
       const _data = await sunSignsChar.findByIdAndDelete(ID)
       if(!_data) {
        return res.json({   status : false,
                           message : 'Record Not deleted...' 
                        })
      }
      else {
        return res.json({   status : true, 
                           message : 'Record deleted Successfully...', 
                        })
     }
 }

 else if(req.method === 'GET') {

   const { ID } = req.query

   let _data = await sunSignsChar.findOne({ _id : ID }) 
 
 if(!_data) {
        return res.json({ Status : false, message : "Record Not Found..." })
   }  
 else {
         return res.json({ Status : true, data : _data })
     }  
}

}

