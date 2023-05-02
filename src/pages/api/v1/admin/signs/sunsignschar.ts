import type { NextApiRequest, NextApiResponse } from 'next'
import sunSignsChar from '../../../models/adminModels/sunSignsCharModel'

const connectDb = require('../../../database/mongoose')
connectDb()

type Data = { }

export default async function handler(   
  req: NextApiRequest,
  res: NextApiResponse<Data> ){


 if(req.method === 'POST') {

   const { SignsID, Traits, Description } = req.body

      let _user = await sunSignsChar.create({ SignsID, Traits, Description })
       if(!_user){
           return res.json({ Status : false, message : "Record not insert" })
       }
      else {
          return res.json({ Status : true, message : "Record submitted" })
      }
   }

   else if(req.method === 'PUT') {
        
     const { ID } = req.body

       let _update = await sunSignsChar.updateOne({ _id : ID }, {
        $set : req.body  })

       if(!_update){
              return res.json({ status : false, message : "Record Not Updated..." })
       }
      else{
            return res.json({ status : true, message : "Record Updated..." })
      }
   }
}

