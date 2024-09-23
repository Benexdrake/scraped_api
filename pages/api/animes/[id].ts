// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import json from '@/public/Animes.json'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {

  let id = req.query.id

  for(let anime of json)
  {
    if(anime._id === id)
    {
      res.status(200).json(anime);
      break
    }
  }
  
  res.status(200).json({});
}
