// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fs from 'fs'

export default function handler(req: NextApiRequest, res: NextApiResponse)
{
  fs.readdir('public/exam', (err,files) => {
    res.status(200).json(files);
  })
  
}