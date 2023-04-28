import type { NextApiRequest, NextApiResponse } from 'next'
import adminModel from '../../models/adminModel'

const connectDb = require('../../database/mongoose')
connectDb()


type Data = {
   
}

export default async function handler(   
  req: NextApiRequest,
  res: NextApiResponse<Data> ){

    // POST Data
  if(req.method === 'GET') {
    // Status Default Value = 1
    const { Name, Username, Password, Status }  = req.body
        console.log("Fields", Name, Username, Password, Status )

    if( !Name || !Username || !Password ) {            
      return res.json({ Status : false, 
        message : "Pls Fill Some Fields..." })
    }
    else {
           const _data = await adminModel.create({ Name, Username, Password, Status })
    
    try {
           return res.status(200).json({  Status : true, 
                                          message : "Record Successfully Inserted", 
                                        })
    }  catch(err) {
         return res.json({  Status : false,  
                            message : "Record Not Inserted", 
                            Error : err 
                          })
    }
  }
}

      // Update Data
    else if(req.method === 'PUT') {

      const _update = await adminModel.updateOne({ _id:req.body.ID }, {
        $set : req.body 
      })
      try {
             return res.status(200).json({  Status : true,
                                              data : _update 
                                         })
        }  catch(err) {
          return res.json({  Status : false,
                              Error : err 
                          })
        }
    }
   
  else if( req.method === 'DELETE' ){

    const { ID } = req.body
      console.log("ID", req.body )
      const _data = await adminModel.deleteOne({ _id : ID })
      
      if(!_data) {
        return res.json({ status : false, message:'Record Not deletd' })
      }
      else{
        return res.json({ status : true, message:'Record deletd Successfully', data : _data })
     }
    
   }

}

