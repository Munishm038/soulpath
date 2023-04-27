// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import UserModel from "../../pages/api/models/UserModel"

const connectDb = require('../api/database/mongoose')
connectDb()

type Data = {
  status: boolean,
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {


  

  res.status(200).json({ message: 'John Doe', status: false })

}
