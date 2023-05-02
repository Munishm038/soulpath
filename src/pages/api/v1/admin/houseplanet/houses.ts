import type { NextApiRequest, NextApiResponse } from 'next'
import houses from '../../../models/adminModels/houses_dataModel'

const connectDb = require('../../../database/mongoose')
connectDb()

type Data = { }

export default async function handler(   
  req: NextApiRequest,
  res: NextApiResponse<Data> ){


 if(req.method === 'POST') {

   const { HouseID, PlanetID, Characteristics, Description } = req.body

      let _user = await houses.create({ HouseID, PlanetID, Characteristics, Description })
       if(!_user){
           return res.json({ Status : false, message : "Record not insert" })
       }
      else {
          return res.json({ Status : true, message : "Record submitted" })
      }
   }

   else if(req.method === 'PUT') {
        
     const { ID } = req.body

       let _update = await houses.updateOne({ _id : ID }, {
        $set : req.body  })

       if(!_update){
              return res.json({ status : false, message : "Record Not Updated..." })
       }
      else{
            return res.json({ status : true, message : "Record Updated...", })
      }
   }

}

