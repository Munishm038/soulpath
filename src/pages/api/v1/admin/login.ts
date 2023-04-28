import type { NextApiRequest, NextApiResponse } from 'next'
const jwt = require('jsonwebtoken')
const secretKey = "golu"

const connectDb = require('../../database/mongoose')
connectDb()

import adminModel from '../../models/adminModel'

type Data = {
   
}

export default async function handler(   
  req: NextApiRequest,
  res: NextApiResponse<Data> ){

    if(req.method === 'POST') {

    const { Username, Password } = req.body

        if( !Username || !Password){
            return res.json({ Status : false, 
                              message : "Pls Fill Some Fields..." })
        }
        else {
            
        const users = await adminModel.find({ Username: Username })

          if(users[0]){
                if( users[0].Password === Password ){
                      const token = jwt.sign({ key: users[0]._id }, secretKey, { expiresIn: '24h' })
                      return res.json({ Token : token })               
                }
              else {
                   return res.json({ Status : false, 
                                     message : "Password Wrong..."})
                }
            }
          else {
               return res.json({ Status : false, 
                                message : "Username Wrong..."})
            }
        }

    // try {
    //     //  const { Username, Password } = req.body

    //     const users = await adminModel.find({ Username: Username, Password: Password })

    //     const token = jwt.sign({ key: users[0]._id }, secretKey, { expiresIn: '24h' })

    //     return res.json({ Token : token })
         

    //     return res.status(200).json({ data : users })
    //  } catch(error) {
    //     console.log("Error", error)
    //  }

   }  

}