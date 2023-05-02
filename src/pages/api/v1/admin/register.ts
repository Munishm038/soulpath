import type { NextApiRequest, NextApiResponse } from 'next'
import adminModel from '../../models/adminModels/adminModel'

// const connectDb = require('../../database/mongoose')
// connectDb()

type Data = {
   
}

export default async function handler(   
  req: NextApiRequest,
  res: NextApiResponse<Data> ){

      // POST Data
    if(req.method === 'POST') {
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
                                          // data : _data
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
 
      const { ID } = req.body

      if(!ID){
        return res.json({   Status : false, 
                           message : "Pls Fill ID..." 
                        })   
      }
     else {
             const _update = await adminModel.updateOne({ _id : ID }, {
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
   }
}

