import type { NextApiRequest, NextApiResponse } from 'next'

// import UserModel from "../../models/UserModel"
import ProductModel from '../../models/ProductModel'

const connectDb = require('../../database/mongoose')
connectDb()

type Data = {
   
}

export default async function handler(   
  req: NextApiRequest,
  res: NextApiResponse<Data> ){

    if (req.method === 'GET') {
      try {
        const users = await ProductModel.find({})
        console.log(users)
        res.send(users)
     } catch(error) {
        console.log("Error", error)
     }
    } else {
      const { name, brand, price, category }  = req.body
      console.log("Fields", name, brand, price, category)

    const _data = new ProductModel({ name, brand, price, category })
    
    try{
                await _data.save()
               res.send("New User Created")
              
            }  catch(error){
                 console.log("Error", error)
            }
    
    }

}