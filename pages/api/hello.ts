// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

interface DataType{
  name: string,
  id: 1
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataType>
) {
  res.status(200).json({ name: 'John Doe', id: 1 })
}
