import type { NextApiRequest, NextApiResponse } from 'next'
import adminModel from '../../models/adminModels/adminModel'

// const connectDb = require('../../database/mongoose')
// connectDb()

type Data = { }

export default async function handler(   
  req: NextApiRequest,
  res: NextApiResponse<Data> ){

    // const {  body, query: { ID } } = req;

    // Delete Record In Database
 if( req.method === 'DELETE' ) {
   
    const { ID } = req.query
       const _data = await adminModel.findByIdAndDelete(ID)
       if(!_data) {
        return res.json({   status : false,
                           message : 'Record Not deletd' 
                        })
      }
      else {
        return res.json({   status : true, 
                           message : 'Record deletd Successfully', 
                        })
     }
 }

}

